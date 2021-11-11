#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var lodash_snakecase_1 = __importDefault(require("lodash.snakecase"));
var text_transformation_invoker_1 = require("../src/text/text-transformation-invoker");
text_transformation_invoker_1.TextTransformationInvoker.transformAndPipeToStdOut(function (s) { var _a; return (_a = (0, lodash_snakecase_1["default"])(s)) === null || _a === void 0 ? void 0 : _a.toUpperCase(); }, process.argv[2]);
