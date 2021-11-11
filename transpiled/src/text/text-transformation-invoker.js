"use strict";
exports.__esModule = true;
exports.TextTransformationInvoker = void 0;
var TextTransformationInvoker = /** @class */ (function () {
    function TextTransformationInvoker() {
    }
    TextTransformationInvoker.transformAndPipeToStdOut = function (fn, input) {
        console.log(fn(input));
    };
    return TextTransformationInvoker;
}());
exports.TextTransformationInvoker = TextTransformationInvoker;
