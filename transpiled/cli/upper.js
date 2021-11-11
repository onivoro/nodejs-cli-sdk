#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var text_transformation_invoker_1 = require("../src/text/text-transformation-invoker");
text_transformation_invoker_1.TextTransformationInvoker.transformAndPipeToStdOut(function (s) { return s.toUpperCase(); }, process.argv[2]);
