"use strict";
exports.__esModule = true;
exports.BinaryPackager = void 0;
var child_process_1 = require("child_process");
var fs_1 = require("fs");
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
        packageContents.bin = {};
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
        return function (name) { return new ScriptObject(_this.cmd, name, _this.projectFolderName, _this.srcDir, _this.transpiledDir, _this.emitTranspiledSubDir); };
    };
    return BinaryPackager;
}());
exports.BinaryPackager = BinaryPackager;
var ScriptObject = /** @class */ (function () {
    function ScriptObject(cmd, name, projectFolderName, srcDir, transpiledDir, emitTranspiledSubDir) {
        if (emitTranspiledSubDir === void 0) { emitTranspiledSubDir = false; }
        this.cmd = cmd;
        this.name = name;
        this.projectFolderName = projectFolderName;
        this.srcDir = srcDir;
        this.transpiledDir = transpiledDir;
        this.emitTranspiledSubDir = emitTranspiledSubDir;
        var transpiledSrc = this.emitTranspiledSubDir ? this.projectFolderName + "/" : '';
        this.scriptPath = "" + transpiledSrc + this.srcDir + "/" + name;
        this.cmdName = this.cmd + '-' + name.replace('.js', '').replace('.ts', '');
        // this.transpiledPath = `${this.transpiledDir}/${this.scriptPath}`.replace('.ts', '.js');      
        this.transpiledPath = ("" + this.scriptPath).replace('.ts', '.js');
        this.dir = this.srcDir;
    }
    return ScriptObject;
}());
