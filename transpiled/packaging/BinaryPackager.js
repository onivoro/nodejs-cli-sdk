import { execSync } from 'child_process';
import { readdirSync, writeFileSync, readFileSync } from 'fs';
import * as _ from 'lodash';
import { BinaryCleaner } from './BinaryCleaner';
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
        var rawPackageContents = (this.readFileSyncOverride || readFileSync)(this.packagePath);
        var packageContents = JSON.parse(rawPackageContents);
        var cliWrapperFiles = (this.readdirSyncOverride || readdirSync)(this.srcDir)
            .map(this.toScriptObj());
        (this.execSyncOverride || execSync)("rm -rf " + this.binDir + " && mkdir " + this.binDir);
        cliWrapperFiles
            .forEach(function (script) {
            console.log("adding script to package.json \"bin\" section: " + script.cmdName + " => " + script.scriptPath);
            packageContents.bin[script.cmdName] = script.transpiledPath;
            BinaryCleaner.deleteBinaryLink(script.cmdName, undefined);
        });
        (this.writeFileSyncOverride || writeFileSync)(this.packagePath, JSON.stringify(packageContents, null, 4), 'utf8');
    }
    BinaryPackager.buildWithDefaultsAndInjection = function (cmd, projectFolderName, execSyncOverride, readdirSyncOverride, writeFileSyncOverride, readFileSyncOverride) {
        return new BinaryPackager(cmd, projectFolderName, undefined, undefined, undefined, undefined, execSyncOverride, readdirSyncOverride, writeFileSyncOverride, readFileSyncOverride);
    };
    BinaryPackager.buildWithDefaults = function (cmd, projectFolderName) {
        return BinaryPackager.buildWithDefaultsAndInjection(cmd, projectFolderName, execSync, readdirSync, writeFileSync, readFileSync);
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
export { BinaryPackager };
