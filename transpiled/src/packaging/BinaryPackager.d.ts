/// <reference types="node" />
export declare class BinaryPackager {
    private cmd;
    private projectFolderName;
    private packagePath;
    private srcDir;
    private transpiledDir;
    private binDir;
    private execSyncOverride;
    private readdirSyncOverride;
    private writeFileSyncOverride;
    private readFileSyncOverride;
    emitTranspiledSubDir: boolean;
    static buildWithDefaultsAndInjection(cmd: string, projectFolderName: string, execSyncOverride: (command: string) => Buffer, readdirSyncOverride: (path: string) => string[], writeFileSyncOverride: (path: string | number, data: any, options?: any) => void, readFileSyncOverride: (path: string) => any): BinaryPackager;
    static buildWithDefaults(cmd: string, projectFolderName: string): BinaryPackager;
    static build(cmd: string, projectFolderName: string, packagePath: string, srcDir: string, transpiledDir: string, binDir: string, execSyncOverride: (command: string) => Buffer, readdirSyncOverride: (path: string) => string[], writeFileSyncOverride: (path: string | number, data: any, options?: any) => void, readFileSyncOverride: (path: string) => any): BinaryPackager;
    constructor(cmd: string, projectFolderName: string, packagePath: string, srcDir: string, transpiledDir: string, binDir: string, execSyncOverride: (command: string) => Buffer, readdirSyncOverride: (path: string) => string[], writeFileSyncOverride: (path: string | number, data: any, options?: any) => void, readFileSyncOverride: (path: string) => any);
    toScriptObj(): (name: string) => {
        dir: string;
        name: string;
        scriptPath: string;
        cmdName: string;
        transpiledPath: string;
    };
}
