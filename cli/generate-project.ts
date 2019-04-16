#! /usr/bin/env node

import {execSync} from "child_process";

execSync(`git clone https://github.com/onivoro/nodejs-cli-starter.git --depth 1 --no-tags`);
