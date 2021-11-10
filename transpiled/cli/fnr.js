#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var exec_if_1 = require("../src/commandline/exec-if");
var find_and_replace_1 = require("../src/disk-io/find-and-replace");
(0, exec_if_1.execIf)(find_and_replace_1.findAndReplace);
