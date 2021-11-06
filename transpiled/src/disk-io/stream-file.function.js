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
exports.streamFile = void 0;
var fs_1 = require("fs");
var rxjs_1 = require("rxjs");
var readline = __importStar(require("readline"));
function streamFile(path, enc) {
    return new rxjs_1.Observable(function (o) {
        var readInterface = readline.createInterface({
            input: (0, fs_1.createReadStream)(path, enc),
            output: process.stdout,
            terminal: false
        });
        readInterface.on('line', function (line) { return o.next(line); });
        readInterface.on('error', function (e) { return o.error(e); });
        readInterface.on('close', function () { return o.complete(); });
        function tearDownLogic() {
            readInterface.close();
        }
        return tearDownLogic;
    });
}
exports.streamFile = streamFile;
