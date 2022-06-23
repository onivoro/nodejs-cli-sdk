#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const text_transformation_invoker_1 = require("../src/text/text-transformation-invoker");
text_transformation_invoker_1.TextTransformationInvoker.transformAndPipeToStdOut(s => { var _a; return (_a = s === null || s === void 0 ? void 0 : s.toUpperCase) === null || _a === void 0 ? void 0 : _a.call(s); }, process.argv[2]);
//# sourceMappingURL=upper.js.map