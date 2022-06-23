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
    let findFilesCmd = `git grep --name-only ${flags} -F`;
    const args = [...findFilesCmd.split(' ').slice(1), find, '--', ...(_ || [])].filter(Boolean);
    const { stdout, stderr } = (0, child_process_1.spawnSync)('git', args, { encoding: 'utf-8' });
    if (stderr) {
        console.log(stderr);
    }
    const files = stdout
        .toString().split('\n').filter(f => f && f.trim().length);
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