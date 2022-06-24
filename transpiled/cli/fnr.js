#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arg_parser_1 = require("../src/commandline/arg-parser");
const help_me_1 = require("../src/commandline/help-me");
const find_and_replace_1 = require("../src/disk-io/find-and-replace");
const { find, replace, _, w, i } = (0, arg_parser_1.argParser)();
(0, help_me_1.helpMe)(find_and_replace_1.findAndReplace, () => (0, find_and_replace_1.findAndReplace)(find, replace, _, w, i)
    .catch(e => console.error(e)));
//# sourceMappingURL=fnr.js.map