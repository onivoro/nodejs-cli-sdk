#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_kebabcase_1 = require("lodash.kebabcase");
const text_transformation_invoker_1 = require("../src/text/text-transformation-invoker");
text_transformation_invoker_1.TextTransformationInvoker.transformAndPipeToStdOut(lodash_kebabcase_1.default, process.argv[2]);
//# sourceMappingURL=kebab.js.map