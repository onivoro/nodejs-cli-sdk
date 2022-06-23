"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAndReplace = void 0;
const child_process_1 = require("child_process");
const fs_1 = require("fs");
function findAndReplace(find, replace, _) {
    const w = false;
    const flagObject = { w };
    const flagKeys = Object.keys(flagObject);
    const fs = flagKeys
        .filter(flagKey => flagObject[flagKey]);
    const flags = fs.length ? ` -${fs.join(' -')}` : '';
    let findFilesPartialCmd = `git grep --name-only ${flags} -F`;
    let findFilesCmd = `git grep --name-only ${flags} -F "${find}"`;
    if (_ && _.length) {
        findFilesCmd += ` -- ${_.join(' ')}`;
    }
    const files = (0, child_process_1.spawnSync)('bin/sh', ['-c', ...findFilesPartialCmd.split(' '), find]).toString().split('\n').filter(f => f && f.trim().length);
    const filesz = (0, child_process_1.execSync)(findFilesCmd).toString().split('\n').filter(f => f && f.trim().length);
    console.log(filesz);
    console.log(files);
    if (replace) {
        const jsFind = w ? `\\b${find}\\b` : find;
        files.forEach(f => {
            const content = (0, child_process_1.execSync)(`cat ${f}`).toString();
            const modified = content.replace(new RegExp(jsFind, 'g'), replace);
            (0, fs_1.writeFile)(f, modified, (err) => {
                err && console.error(`failed to write file ${f} :::>`, err);
            });
        });
    }
    else {
        files.forEach(f => console.log(f));
    }
}
exports.findAndReplace = findAndReplace;
//# sourceMappingURL=find-and-replace.js.map