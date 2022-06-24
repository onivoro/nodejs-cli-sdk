"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.argParser = void 0;
const yargsParser = require("yargs-parser");
function argParser() {
    const args = yargsParser(process.argv.slice(2));
    return args;
}
exports.argParser = argParser;
//# sourceMappingURL=arg-parser.js.map