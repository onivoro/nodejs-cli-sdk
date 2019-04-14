"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var child_process_1 = require("child_process");
var fs_1 = require("fs");
var _ = __importStar(require("lodash"));
var BinaryCleaner_1 = require("./BinaryCleaner");
var BinaryPackager = /** @class */ (function () {
    function BinaryPackager(cmd, projectFolderName, packagePath, srcDir, transpiledDir, binDir, execSyncOverride, readdirSyncOverride, writeFileSyncOverride, readFileSyncOverride) {
        if (packagePath === void 0) { packagePath = 'package.json'; }
        if (srcDir === void 0) { srcDir = 'cli'; }
        if (transpiledDir === void 0) { transpiledDir = 'transpiled'; }
        if (binDir === void 0) { binDir = '.binary'; }
        this.cmd = cmd;
        this.projectFolderName = projectFolderName;
        this.packagePath = packagePath;
        this.srcDir = srcDir;
        this.transpiledDir = transpiledDir;
        this.binDir = binDir;
        this.execSyncOverride = execSyncOverride;
        this.readdirSyncOverride = readdirSyncOverride;
        this.writeFileSyncOverride = writeFileSyncOverride;
        this.readFileSyncOverride = readFileSyncOverride;
        this.emitTranspiledSubDir = false;
        var rawPackageContents = (this.readFileSyncOverride || fs_1.readFileSync)(this.packagePath);
        var packageContents = JSON.parse(rawPackageContents);
        var cliWrapperFiles = (this.readdirSyncOverride || fs_1.readdirSync)(this.srcDir)
            .map(this.toScriptObj());
        (this.execSyncOverride || child_process_1.execSync)("rm -rf " + this.binDir + " && mkdir " + this.binDir);
        cliWrapperFiles
            .forEach(function (script) {
            console.log("adding script to package.json \"bin\" section: " + script.cmdName + " => " + script.scriptPath);
            packageContents.bin[script.cmdName] = script.transpiledPath;
            BinaryCleaner_1.BinaryCleaner.deleteBinaryLink(script.cmdName, undefined);
        });
        (this.writeFileSyncOverride || fs_1.writeFileSync)(this.packagePath, JSON.stringify(packageContents, null, 4), 'utf8');
    }
    BinaryPackager.buildWithDefaultsAndInjection = function (cmd, projectFolderName, execSyncOverride, readdirSyncOverride, writeFileSyncOverride, readFileSyncOverride) {
        return new BinaryPackager(cmd, projectFolderName, undefined, undefined, undefined, undefined, execSyncOverride, readdirSyncOverride, writeFileSyncOverride, readFileSyncOverride);
    };
    BinaryPackager.buildWithDefaults = function (cmd, projectFolderName) {
        return BinaryPackager.buildWithDefaultsAndInjection(cmd, projectFolderName, child_process_1.execSync, fs_1.readdirSync, fs_1.writeFileSync, fs_1.readFileSync);
    };
    BinaryPackager.build = function (cmd, projectFolderName, packagePath, srcDir, transpiledDir, binDir, execSyncOverride, readdirSyncOverride, writeFileSyncOverride, readFileSyncOverride) {
        return new BinaryPackager(cmd, projectFolderName, packagePath, srcDir, undefined, undefined, execSyncOverride, readdirSyncOverride, writeFileSyncOverride, readFileSyncOverride);
    };
    BinaryPackager.prototype.toScriptObj = function () {
        var _this = this;
        return function (name) {
            var transpiledSrc = _this.emitTranspiledSubDir ? _this.projectFolderName + "/" : '';
            var scriptPath = "" + transpiledSrc + _this.srcDir + "/" + name;
            var cmdName = _this.cmd + '-' + name.replace('.js', '').replace('.ts', '');
            var transpiledPath = (_this.transpiledDir + "/" + scriptPath).replace('.ts', '.js');
            return _.assign({ dir: _this.srcDir, name: name, scriptPath: scriptPath, cmdName: cmdName, transpiledPath: transpiledPath });
        };
    };
    return BinaryPackager;
}());
exports.BinaryPackager = BinaryPackager;
