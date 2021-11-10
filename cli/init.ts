#! /usr/bin/env node

import {execSync} from "child_process";
import { execIf } from "../src";

execIf(function init(web, name) {
    if (web) {
        execSync(`git clone https://github.com/icedlee337/popcorn-bingo.git --depth 1 --no-tags`);
        // todo: replace all the things
    } else {
        execSync(`git clone https://github.com/onivoro/nodejs-cli-starter.git --depth 1 --no-tags`);
        // todo: replace all the things
    }
})
