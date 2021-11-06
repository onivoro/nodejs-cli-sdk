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
exports.getDirsAtPath = void 0;
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var identity = function (i) { return i; };
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
        return fs.readdirSync(resolvedRelativePath_1)
            .filter(function (itemPath) { return fs.statSync(path.resolve(resolvedRelativePath_1, itemPath)).isDirectory(); })
            .filter(showDotDirs ? identity : function (dir) { return dir[0] !== '.'; })
            .filter(showNodeModules ? identity : function (dir) { return dir !== 'node_modules'; });
    }
    catch (e) {
        return [];
    }
}
exports.getDirsAtPath = getDirsAtPath;
;
