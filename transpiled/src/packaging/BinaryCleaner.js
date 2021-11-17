"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryCleaner = void 0;
const child_process_1 = require("child_process");
const path_1 = require("path");
class BinaryCleaner {
    static deleteBinaryLink(command, execSyncOverride) {
        const bash = execSyncOverride || child_process_1.execSync;
        const dir = BinaryCleaner.getNodeBin();
        dir && bash((`rm -rf ${dir}/${command}`));
    }
    static getNodeBin(execSyncOverride) {
        const bash = execSyncOverride || child_process_1.execSync;
        try {
            const filePathToTest = bash(`which npm`)
                .toString()
                .split('\n')
                .filter(i => i && i.length)[0];
            const { dir } = (0, path_1.parse)(filePathToTest);
            console.log(dir);
            return dir;
        }
        catch (e) {
            return '';
        }
    }
}
exports.BinaryCleaner = BinaryCleaner;
//# sourceMappingURL=BinaryCleaner.js.map