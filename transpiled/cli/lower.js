#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const text_transformation_invoker_1 = require("../src/text/text-transformation-invoker");
text_transformation_invoker_1.TextTransformationInvoker.transformAndPipeToStdOut(s => s.toLowerCase(), process.argv[2]);
//# sourceMappingURL=lower.js.map