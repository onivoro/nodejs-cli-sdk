"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveObjectToDisk = void 0;
const fs_1 = require("fs");
const log_error_function_1 = require("./log-error.function");
function saveObjectToDisk(object, outputPath, file, errorHandler) {
    const path = `${outputPath}/`.replace('//', '/');
    (0, fs_1.writeFile)(`${path}${file}`, JSON.stringify(object, null, 2), errorHandler || log_error_function_1.logError);
}
exports.saveObjectToDisk = saveObjectToDisk;
//# sourceMappingURL=save-object-to-disk.function.js.map