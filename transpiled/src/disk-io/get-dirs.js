"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDirsAtPath = exports.getDirs = void 0;
const fs = require("fs");
const path = require("path");
const identity = i => i;
function getDirs(relativePath, showDotDirs = false, showNodeModules = false) {
    return getDirsAtPath(process.cwd(), relativePath, showDotDirs, showNodeModules);
}
exports.getDirs = getDirs;
;
function getDirsAtPath(cwdOverride, relativePath = '.', showDotDirs = false, showNodeModules = false) {
    try {
        const resolvedRelativePath = path.resolve(cwdOverride || process.cwd(), relativePath);
        return fs.readdirSync(resolvedRelativePath)
            .filter(itemPath => fs.statSync(path.resolve(resolvedRelativePath, itemPath)).isDirectory())
            .filter(showDotDirs ? identity : dir => dir[0] !== '.')
            .filter(showNodeModules ? identity : dir => dir !== 'node_modules');
    }
    catch (e) {
        return [];
    }
}
exports.getDirsAtPath = getDirsAtPath;
;
//# sourceMappingURL=get-dirs.js.map