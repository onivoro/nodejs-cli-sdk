"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var lodash_1 = __importDefault(require("lodash"));
function default_1(relativePath, showDotDirs, showNodeModules) {
    if (showDotDirs === void 0) { showDotDirs = false; }
    if (showNodeModules === void 0) { showNodeModules = false; }
    return getDirsAtPath(process.cwd(), relativePath, showDotDirs, showNodeModules);
}
exports["default"] = default_1;
;
function getDirsAtPath(cwdOverride, relativePath, showDotDirs, showNodeModules) {
    if (relativePath === void 0) { relativePath = '.'; }
    if (showDotDirs === void 0) { showDotDirs = false; }
    if (showNodeModules === void 0) { showNodeModules = false; }
    try {
        var resolvedRelativePath_1 = path.resolve(cwdOverride || process.cwd(), relativePath);
        return lodash_1["default"](fs.readdirSync(resolvedRelativePath_1))
            .filter(function (itemPath) { return fs.statSync(path.resolve(resolvedRelativePath_1, itemPath)).isDirectory(); })
            .filter(showDotDirs ? lodash_1["default"].identity : function (dir) { return dir[0] !== '.'; })
            .filter(showNodeModules ? lodash_1["default"].identity : function (dir) { return dir !== 'node_modules'; })
            .value();
    }
    catch (e) {
        return [];
    }
}
exports.getDirsAtPath = getDirsAtPath;
;
