"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.save = void 0;
const fs_1 = require("fs");
const log_error_function_1 = require("./log-error.function");
function save(payload, outputPath, file, errorHandler) {
    const path = `${outputPath}/`.replace('//', '/');
    (0, fs_1.writeFile)(`${path}${file}`, payload, errorHandler || log_error_function_1.logError);
}
exports.save = save;
//# sourceMappingURL=save.function.js.map