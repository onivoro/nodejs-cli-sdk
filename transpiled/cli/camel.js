#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_camelcase_1 = require("lodash.camelcase");
const text_transformation_invoker_1 = require("../src/text/text-transformation-invoker");
text_transformation_invoker_1.TextTransformationInvoker.transformAndPipeToStdOut(lodash_camelcase_1.default, process.argv[2]);
//# sourceMappingURL=camel.js.map