#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process");
var src_1 = require("../src");
(0, src_1.execIf)(function init(web, name) {
    if (web) {
        (0, child_process_1.execSync)("git clone https://github.com/icedlee337/popcorn-bingo.git --depth 1 --no-tags");
        // todo: replace all the things
    }
    else {
        (0, child_process_1.execSync)("git clone https://github.com/onivoro/nodejs-cli-starter.git --depth 1 --no-tags");
        // todo: replace all the things
    }
});
