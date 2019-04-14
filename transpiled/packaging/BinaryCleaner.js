import { execSync } from 'child_process';
import { parse } from 'path';
var BinaryCleaner = /** @class */ (function () {
    function BinaryCleaner() {
    }
    BinaryCleaner.deleteBinaryLink = function (command, execSyncOverride) {
        var bash = execSyncOverride || execSync;
        var dir = BinaryCleaner.getNodeBin();
        dir && bash(("rm -rf " + dir + "/" + command));
    };
    BinaryCleaner.getNodeBin = function (execSyncOverride) {
        var bash = execSyncOverride || execSync;
        try {
            var filePathToTest = bash("which npm")
                .toString()
                .split('\n')
                .filter(function (i) { return i && i.length; })[0];
            var dir = parse(filePathToTest).dir;
            console.log(dir);
            return dir;
        }
        catch (e) {
            return '';
        }
    };
    return BinaryCleaner;
}());
export { BinaryCleaner };
