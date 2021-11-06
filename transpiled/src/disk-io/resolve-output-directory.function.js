"use strict";
exports.__esModule = true;
exports.resolveOutputDirectory = void 0;
var path_1 = require("path");
var resolveOutputDirectory = function (subDirectory, parentDirectory) {
    return (0, path_1.resolve)(parentDirectory, subDirectory);
};
exports.resolveOutputDirectory = resolveOutputDirectory;
