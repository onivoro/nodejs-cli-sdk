#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const get_dirs_1 = require("../src/disk-io/get-dirs");
const child_process_1 = require("child_process");
const bashCmd = process.argv[2];
const instructions = `
        USEAGE:
        arc-all 'cmd:string' relPath1:string? relPath2:string? ... relPathN:string?

        EXAMPLE:
        arc-all 'ls -lah' /usr/bin /usr/local
        `;
if (!bashCmd) {
    console.log(instructions);
    process.exit(1);
}
else {
    const projectNames = (process.argv.length > 3
        ? process.argv.slice(3)
        : (0, get_dirs_1.getDirs)());
    console.log('\n');
    (projectNames).forEach(project => {
        try {
            (0, child_process_1.execSync)(bashCmd, { cwd: path.resolve(process.cwd(), project) })
                .toString()
                .split('\n')
                .filter(line => line && line.trim().length)
                .map(output => `${project} :: ${output}`)
                .forEach(x => console.log(x));
            console.log('\n');
        }
        catch (e) {
            console.log(`${project} :: ${e}`);
        }
    });
}
//# sourceMappingURL=all.js.map