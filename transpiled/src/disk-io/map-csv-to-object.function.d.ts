export declare function mapCsvToObject<T extends ILiner>(line: string, schema: string[], delimiter?: string): T;
export interface ILiner {
    line: string;
}
