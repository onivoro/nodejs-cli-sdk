"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAndReplace = void 0;
const tslib_1 = require("tslib");
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const server_git_1 = require("@onivoro/server-git");
function findAndReplace(find, replace, _ = [], w = false, i = false) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const files = yield new server_git_1.GrepService().grep(find, process.cwd(), _, { w, i });
        if (replace) {
            const jsFind = w ? `\\b${find}\\b` : find;
            files.forEach(f => {
                const content = (0, child_process_1.execSync)(`cat ${f}`).toString();
                const modified = content.replace(new RegExp(jsFind, i ? 'gi' : 'g'), replace);
                (0, fs_1.writeFile)(f, modified, (err) => {
                    err && console.error(`failed to write file ${f} :::>`, err);
                });
            });
        }
        else {
            files.forEach(f => console.log(f));
        }
    });
}
exports.findAndReplace = findAndReplace;
//# sourceMappingURL=find-and-replace.js.map