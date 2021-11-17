"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameter = void 0;
class Parameter {
    constructor(name, options, optional) {
        this.name = name;
        this.options = options;
        this.optional = optional;
    }
    isInvalid(value) {
        if (!value && !this.optional) {
            if (this.hasOptions()) {
                return this.getOptionWarning();
            }
            return `\n--${this.name} is required`;
        }
    }
    getOptionText() {
        return this.options.map(o => `\n    * ${o}`).join('');
    }
    getOptionWarning() {
        return `\n--${this.name} must be one of => ${this.getOptionText()}`;
    }
    hasOptions() {
        return this.options && this.options.length;
    }
    static validateAll(config, params) {
        const errors = [];
        const expectedParams = Object.keys(config);
        expectedParams.forEach(expectedParamName => {
            const paramInstance = config[expectedParamName];
            const error = paramInstance.isInvalid(params && params[expectedParamName]);
            if (error) {
                errors.push(error);
            }
        });
        return errors;
    }
}
exports.Parameter = Parameter;
//# sourceMappingURL=parameter.js.map