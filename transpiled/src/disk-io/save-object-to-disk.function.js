"use strict";
exports.__esModule = true;
exports.saveObjectToDisk = void 0;
var fs_1 = require("fs");
var log_error_function_1 = require("./log-error.function");
function saveObjectToDisk(object, outputPath, file, errorHandler) {
    var path = (outputPath + "/").replace('//', '/');
    (0, fs_1.writeFile)("" + path + file, JSON.stringify(object, null, 2), errorHandler || log_error_function_1.logError);
}
exports.saveObjectToDisk = saveObjectToDisk;
