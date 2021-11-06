"use strict";
exports.__esModule = true;
exports.BinaryCleaner = void 0;
var child_process_1 = require("child_process");
var path_1 = require("path");
var BinaryCleaner = /** @class */ (function () {
    function BinaryCleaner() {
    }
    BinaryCleaner.deleteBinaryLink = function (command, execSyncOverride) {
        var bash = execSyncOverride || child_process_1.execSync;
        var dir = BinaryCleaner.getNodeBin();
        dir && bash(("rm -rf " + dir + "/" + command));
    };
    BinaryCleaner.getNodeBin = function (execSyncOverride) {
        var bash = execSyncOverride || child_process_1.execSync;
        try {
            var filePathToTest = bash("which npm")
                .toString()
                .split('\n')
                .filter(function (i) { return i && i.length; })[0];
            var dir = (0, path_1.parse)(filePathToTest).dir;
            console.log(dir);
            return dir;
        }
        catch (e) {
            return '';
        }
    };
    return BinaryCleaner;
}());
exports.BinaryCleaner = BinaryCleaner;
