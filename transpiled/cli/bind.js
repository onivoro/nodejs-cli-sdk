#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var BinaryPackager_1 = require("../src/packaging/BinaryPackager");
var arg_parser_1 = require("../src/commandline/arg-parser");
var _a = (0, arg_parser_1.argParser)(process.argv), name = _a.name, src = _a.src;
BinaryPackager_1.BinaryPackager.buildWithDefaults(name, src);
