"use strict";
exports.__esModule = true;
exports.save = void 0;
var fs_1 = require("fs");
var log_error_function_1 = require("./log-error.function");
function save(payload, outputPath, file, errorHandler) {
    var path = (outputPath + "/").replace('//', '/');
    (0, fs_1.writeFile)("" + path + file, payload, errorHandler || log_error_function_1.logError);
}
exports.save = save;
