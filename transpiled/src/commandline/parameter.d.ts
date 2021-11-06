export declare class Parameter {
    name: any;
    options?: any;
    optional?: any;
    constructor(name: any, options?: any, optional?: any);
    isInvalid(value: any): string;
    getOptionText(): any;
    getOptionWarning(): string;
    hasOptions(): any;
    static validateAll(config: any, params: any): any[];
}
