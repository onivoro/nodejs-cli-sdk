"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextTransformationInvoker = void 0;
class TextTransformationInvoker {
    static transformAndPipeToStdOut(fn, input) {
        console.log(fn(input));
    }
}
exports.TextTransformationInvoker = TextTransformationInvoker;
//# sourceMappingURL=text-transformation-invoker.js.map