import {execSync} from 'child_process';
import {readdirSync, writeFileSync, readFileSync} from 'fs';

import {BinaryCleaner} from './BinaryCleaner';

export class BinaryPackager {
  emitTranspiledSubDir = false;

  static buildWithDefaultsAndInjection (cmd: string, projectFolderName: string,
    execSyncOverride: (command: string) => Buffer,
    readdirSyncOverride: (path: string) => string[],
    writeFileSyncOverride: (path: string | number, data: any, options?: any) => void,
    readFileSyncOverride: (path: string) => any) {
    return new BinaryPackager(cmd, projectFolderName, undefined, undefined, undefined, undefined, execSyncOverride, readdirSyncOverride, writeFileSyncOverride, readFileSyncOverride);
  }

  static buildWithDefaults (cmd: string, projectFolderName?: string) {
    return BinaryPackager.buildWithDefaultsAndInjection(cmd, projectFolderName, execSync, readdirSync, writeFileSync, readFileSync);
  }

  static build (
    cmd: string,
    projectFolderName: string,
    packagePath: string,
    srcDir: string,
    transpiledDir: string,
    binDir: string,
    execSyncOverride: (command: string) => Buffer,
    readdirSyncOverride: (path: string) => string[],
    writeFileSyncOverride: (path: string | number, data: any, options?: any) => void,
    readFileSyncOverride: (path: string) => any
  ) {
    return new BinaryPackager(cmd, projectFolderName, packagePath, srcDir, undefined, undefined, execSyncOverride, readdirSyncOverride, writeFileSyncOverride, readFileSyncOverride);
  }

  constructor (private cmd: string,
    private projectFolderName: string,
    private packagePath = 'package.json',
    private srcDir = 'cli',
    private transpiledDir = 'transpiled',
    private binDir = '.binary',
    private execSyncOverride: (command: string) => Buffer,
    private readdirSyncOverride: (path: string) => string[],
    private writeFileSyncOverride: (path: string | number, data: any, options?: any) => void,
    private readFileSyncOverride: (path: string) => any
  ) {
    const rawPackageContents = (this.readFileSyncOverride || readFileSync)(this.packagePath);
    const packageContents = JSON.parse(rawPackageContents);
    packageContents.bin = {};

    const cliWrapperFiles = (this.readdirSyncOverride || readdirSync)(this.srcDir)
      .map(this.toScriptObj());

    (this.execSyncOverride || execSync)(`rm -rf ${this.binDir} && mkdir ${this.binDir}`);

    cliWrapperFiles
      .forEach((script) => {
        console.log(`adding script to package.json "bin" section: ${script.cmdName} => ${script.scriptPath}`);
        packageContents.bin[script.cmdName] = script.transpiledPath;
        BinaryCleaner.deleteBinaryLink(script.cmdName, undefined);
      });

    (this.writeFileSyncOverride || writeFileSync)(this.packagePath, JSON.stringify(packageContents, null, 4), 'utf8');

  }

  toScriptObj () {
    return (name: string) => new ScriptObject(this.cmd, name, this.projectFolderName, this.srcDir, this.transpiledDir);
  }
}

class ScriptObject {
  scriptPath: string;
  cmdName: string;
  transpiledPath: string;
  dir: string;
  constructor(private cmd: string, private name: string, private projectFolderName: string, private srcDir: string, private transpiledDir) {
    const transpiledSrc = this.projectFolderName || '';
      this.scriptPath = `${transpiledSrc}${this.srcDir}/${name}`;
      this.cmdName = this.cmd + '-' + name.replace('.js', '').replace('.ts', '');
      this.transpiledPath = `${this.transpiledDir}/${this.scriptPath}`.replace('.ts', '.js');        
      this.dir = this.srcDir;
  }
}
