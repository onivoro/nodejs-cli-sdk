"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveOutputDirectory = void 0;
const path_1 = require("path");
const resolveOutputDirectory = (subDirectory, parentDirectory) => {
    return (0, path_1.resolve)(parentDirectory, subDirectory);
};
exports.resolveOutputDirectory = resolveOutputDirectory;
//# sourceMappingURL=resolve-output-directory.function.js.map