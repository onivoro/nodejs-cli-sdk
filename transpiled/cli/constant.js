#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const text_transformation_invoker_1 = require("../src/text/text-transformation-invoker");
text_transformation_invoker_1.TextTransformationInvoker.transformAndPipeToStdOut((s) => { var _a; return (_a = (0, lodash_1.snakeCase)(s)) === null || _a === void 0 ? void 0 : _a.toUpperCase(); }, process.argv[2]);
//# sourceMappingURL=constant.js.map