"use strict";
exports.__esModule = true;
var FunctionParser = /** @class */ (function () {
    function FunctionParser() {
    }
    FunctionParser.parseFunctionArguments = function (functionBody) {
        return functionBody.split('(')[1].split(')')[0].split(',').map(function (s) { return s.trim(); });
    };
    return FunctionParser;
}());
exports.FunctionParser = FunctionParser;
