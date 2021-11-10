#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var BinaryPackager_1 = require("../src/packaging/BinaryPackager");
var exec_if_1 = require("../src/commandline/exec-if");
(0, exec_if_1.execIf)(function bind(name) {
    BinaryPackager_1.BinaryPackager.buildWithDefaults(name);
});
