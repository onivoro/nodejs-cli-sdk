#! /usr/bin/env node

import { execSync } from "child_process";
import { findAndReplace } from "../src/disk-io/find-and-replace";
import { kebabCase } from "lodash";
import { resolve } from "path";
import { helpMe } from "../src/commandline/help-me";
import { argParser } from "../src/commandline/arg-parser";

const { web, name } = argParser();

helpMe(init, () => init(web, name));

function init(web, name) {
    if (web) {
        const webPj = 'popcorn-bingo';
        execSync(`git clone https://github.com/icedlee337/${webPj}.git --depth 1 --no-tags`);
        replace(webPj, name);
    } else {
        const serverPj = 'popcorn-bingo';
        execSync(`git clone https://github.com/onivoro/${serverPj}.git --depth 1 --no-tags`);
        replace(serverPj, name);
    }
}

function replace(find, replace) {
    const kebabReplace = kebabCase(replace);
    execSync(`mv ${find} ${kebabReplace}`);
    process.chdir(resolve(process.cwd(), kebabReplace))
    findAndReplace(find, kebabReplace, [], false, false);
}
