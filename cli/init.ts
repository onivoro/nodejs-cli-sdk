#! /usr/bin/env node

import { execSync } from "child_process";
import { findAndReplace } from "../src/disk-io/find-and-replace";
import { execIf } from "../src/commandline/exec-if";
import { kebabCase } from "lodash";


execIf(function init(web, name) {
    if (web) {
        const webPj = 'popcorn-bingo';
        execSync(`git clone https://github.com/icedlee337/${webPj}.git --depth 1 --no-tags`);        
        replace(webPj, name);
    } else {
        const serverPj = 'popcorn-bingo';
        execSync(`git clone https://github.com/onivoro/${serverPj}.git --depth 1 --no-tags`);
        replace(serverPj, name);
    }
})

function replace(find, replace) {
    const kebabReplace = kebabCase(replace);
    execSync(`mv ${find} ${kebabReplace} && cd ${kebabReplace}`);
    findAndReplace(find, kebabReplace, []);
}
