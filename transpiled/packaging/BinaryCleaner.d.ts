/// <reference types="node" />
export declare class BinaryCleaner {
    static deleteBinaryLink(command: string, execSyncOverride?: (cmd: string) => Buffer): void;
    static getNodeBin(execSyncOverride?: (cmd: string) => Buffer): string;
}
