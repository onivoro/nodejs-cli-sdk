"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapCsvToObject = void 0;
function mapCsvToObject(line, schema, delimiter = ',') {
    const object = {};
    const data = line.split(delimiter);
    schema.forEach((key, index) => {
        object[key ? key.trim() : key] = data[index] ? data[index].trim() : data[index];
    });
    object.line = line;
    return object;
}
exports.mapCsvToObject = mapCsvToObject;
//# sourceMappingURL=map-csv-to-object.function.js.map