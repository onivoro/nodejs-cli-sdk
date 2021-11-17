"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamFile = void 0;
const fs_1 = require("fs");
const rxjs_1 = require("rxjs");
const readline = require("readline");
function streamFile(path, enc) {
    return new rxjs_1.Observable(o => {
        const readInterface = readline.createInterface({
            input: (0, fs_1.createReadStream)(path, enc),
            output: process.stdout,
            terminal: false
        });
        readInterface.on('line', line => o.next(line));
        readInterface.on('error', e => o.error(e));
        readInterface.on('close', () => o.complete());
        function tearDownLogic() {
            readInterface.close();
        }
        return tearDownLogic;
    });
}
exports.streamFile = streamFile;
//# sourceMappingURL=stream-file.function.js.map