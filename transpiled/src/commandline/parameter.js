"use strict";
exports.__esModule = true;
exports.Parameter = void 0;
var Parameter = /** @class */ (function () {
    function Parameter(name, options, optional) {
        this.name = name;
        this.options = options;
        this.optional = optional;
    }
    Parameter.prototype.isInvalid = function (value) {
        if (!value && !this.optional) {
            if (this.hasOptions()) {
                return this.getOptionWarning();
            }
            return "\n--" + this.name + " is required";
        }
    };
    Parameter.prototype.getOptionText = function () {
        return this.options.map(function (o) { return "\n    * " + o; }).join('');
    };
    Parameter.prototype.getOptionWarning = function () {
        return "\n--" + this.name + " must be one of => " + this.getOptionText();
    };
    Parameter.prototype.hasOptions = function () {
        return this.options && this.options.length;
    };
    Parameter.validateAll = function (config, params) {
        var errors = [];
        var expectedParams = Object.keys(config);
        expectedParams.forEach(function (expectedParamName) {
            var paramInstance = config[expectedParamName];
            var error = paramInstance.isInvalid(params && params[expectedParamName]);
            if (error) {
                errors.push(error);
            }
        });
        return errors;
    };
    return Parameter;
}());
exports.Parameter = Parameter;
