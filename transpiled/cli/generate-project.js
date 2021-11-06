#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process");
(0, child_process_1.execSync)("git clone https://github.com/onivoro/nodejs-cli-starter.git --depth 1 --no-tags");
