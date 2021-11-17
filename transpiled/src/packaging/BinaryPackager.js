"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryPackager = void 0;
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const BinaryCleaner_1 = require("./BinaryCleaner");
class BinaryPackager {
    constructor(cmd, projectFolderName, packagePath = 'package.json', srcDir = 'cli', transpiledDir = 'transpiled', binDir = '.binary', execSyncOverride, readdirSyncOverride, writeFileSyncOverride, readFileSyncOverride) {
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
        const rawPackageContents = (this.readFileSyncOverride || fs_1.readFileSync)(this.packagePath);
        const packageContents = JSON.parse(rawPackageContents);
        packageContents.bin = {};
        const cliWrapperFiles = (this.readdirSyncOverride || fs_1.readdirSync)(this.srcDir)
            .map(this.toScriptObj());
        (this.execSyncOverride || child_process_1.execSync)(`rm -rf ${this.binDir} && mkdir ${this.binDir}`);
        cliWrapperFiles
            .forEach((script) => {
            console.log(`adding script to package.json "bin" section: ${script.cmdName} => ${script.scriptPath}`);
            packageContents.bin[script.cmdName] = script.transpiledPath;
            BinaryCleaner_1.BinaryCleaner.deleteBinaryLink(script.cmdName, undefined);
        });
        (this.writeFileSyncOverride || fs_1.writeFileSync)(this.packagePath, JSON.stringify(packageContents, null, 4), 'utf8');
    }
    static buildWithDefaultsAndInjection(cmd, projectFolderName, execSyncOverride, readdirSyncOverride, writeFileSyncOverride, readFileSyncOverride) {
        return new BinaryPackager(cmd, projectFolderName, undefined, undefined, undefined, undefined, execSyncOverride, readdirSyncOverride, writeFileSyncOverride, readFileSyncOverride);
    }
    static buildWithDefaults(cmd, projectFolderName) {
        return BinaryPackager.buildWithDefaultsAndInjection(cmd, projectFolderName, child_process_1.execSync, fs_1.readdirSync, fs_1.writeFileSync, fs_1.readFileSync);
    }
    static build(cmd, projectFolderName, packagePath, srcDir, _transpiledDir, _binDir, execSyncOverride, readdirSyncOverride, writeFileSyncOverride, readFileSyncOverride) {
        return new BinaryPackager(cmd, projectFolderName, packagePath, srcDir, undefined, undefined, execSyncOverride, readdirSyncOverride, writeFileSyncOverride, readFileSyncOverride);
    }
    toScriptObj() {
        return (name) => new ScriptObject(this.cmd, name, this.projectFolderName, this.srcDir, this.transpiledDir);
    }
}
exports.BinaryPackager = BinaryPackager;
class ScriptObject {
    constructor(cmd, name, projectFolderName, srcDir, transpiledDir) {
        this.cmd = cmd;
        this.name = name;
        this.projectFolderName = projectFolderName;
        this.srcDir = srcDir;
        this.transpiledDir = transpiledDir;
        const transpiledSrc = this.projectFolderName || '';
        this.scriptPath = `${transpiledSrc}${this.srcDir}/${name}`;
        this.cmdName = this.cmd + '-' + this.name.replace('.js', '').replace('.ts', '');
        this.transpiledPath = `${this.transpiledDir}/${this.scriptPath}`.replace('.ts', '.js');
        this.dir = this.srcDir;
    }
}
//# sourceMappingURL=BinaryPackager.js.map