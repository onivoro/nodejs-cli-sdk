#! /usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var path = __importStar(require("path"));
var get_dirs_1 = require("../src/disk-io/get-dirs");
var child_process_1 = require("child_process");
var bashCmd = process.argv[2];
var instructions = "\n        USEAGE:\n        arc-all 'cmd:string' relPath1:string? relPath2:string? ... relPathN:string?\n\n        EXAMPLE:\n        arc-all 'ls -lah' /usr/bin /usr/local\n        ";
if (!bashCmd) {
    console.log(instructions);
    process.exit(1);
}
else {
    var projectNames = (process.argv.length > 3
        ? process.argv.slice(3)
        : (0, get_dirs_1.getDirs)());
    console.log('\n');
    (projectNames).forEach(function (project) {
        try {
            var output = (0, child_process_1.execSync)(bashCmd, { cwd: path.resolve(process.cwd(), project) })
                .toString()
                .split('\n')
                .filter(function (line) { return line && line.trim().length; })
                .map(function (output) { return project + " :: " + output; })
                .forEach(function (x) { return console.log(x); });
            console.log('\n');
        }
        catch (e) {
            console.log(project + " :: " + e);
        }
    });
}
