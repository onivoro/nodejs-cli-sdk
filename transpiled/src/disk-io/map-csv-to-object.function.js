"use strict";
exports.__esModule = true;
exports.mapCsvToObject = void 0;
function mapCsvToObject(line, schema, delimiter) {
    if (delimiter === void 0) { delimiter = ','; }
    var object = {};
    var data = line.split(delimiter);
    schema.forEach(function (key, index) {
        object[key ? key.trim() : key] = data[index] ? data[index].trim() : data[index];
    });
    object.line = line;
    return object;
}
exports.mapCsvToObject = mapCsvToObject;
