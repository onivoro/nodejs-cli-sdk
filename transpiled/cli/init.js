#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const find_and_replace_1 = require("../src/disk-io/find-and-replace");
const lodash_1 = require("lodash");
const path_1 = require("path");
const help_me_1 = require("../src/commandline/help-me");
const arg_parser_1 = require("../src/commandline/arg-parser");
const { web, name } = (0, arg_parser_1.argParser)();
(0, help_me_1.helpMe)(init, () => init(web, name));
function init(web, name) {
    if (web) {
        const webPj = 'popcorn-bingo';
        (0, child_process_1.execSync)(`git clone https://github.com/icedlee337/${webPj}.git --depth 1 --no-tags`);
        replace(webPj, name);
    }
    else {
        const serverPj = 'popcorn-bingo';
        (0, child_process_1.execSync)(`git clone https://github.com/onivoro/${serverPj}.git --depth 1 --no-tags`);
        replace(serverPj, name);
    }
}
function replace(find, replace) {
    const kebabReplace = (0, lodash_1.kebabCase)(replace);
    (0, child_process_1.execSync)(`mv ${find} ${kebabReplace}`);
    process.chdir((0, path_1.resolve)(process.cwd(), kebabReplace));
    (0, find_and_replace_1.findAndReplace)(find, kebabReplace, [], false, false);
}
//# sourceMappingURL=init.js.map