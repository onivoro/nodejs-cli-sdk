#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_snakecase_1 = require("lodash.snakecase");
const text_transformation_invoker_1 = require("../src/text/text-transformation-invoker");
text_transformation_invoker_1.TextTransformationInvoker.transformAndPipeToStdOut(lodash_snakecase_1.default, process.argv[2]);
//# sourceMappingURL=snake.js.map