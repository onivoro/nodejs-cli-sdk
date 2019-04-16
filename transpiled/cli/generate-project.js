#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process");
var lodash_1 = require("lodash");
child_process_1.execSync("git clone https://github.com/onivoro/nodejs-cli-starter.git --depth 1 --no-tags");
[].forEach(function (term) {
    child_process_1.execSync("git grep -w " + term + " --name-only").toString().split('\n')
        .filter(lodash_1.identity);
});
