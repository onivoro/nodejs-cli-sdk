
export class Parameter {
  constructor(public name, public options?, public optional?) { }

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
