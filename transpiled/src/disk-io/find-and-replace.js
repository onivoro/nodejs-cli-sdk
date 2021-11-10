"use strict";
exports.__esModule = true;
exports.findAndReplace = void 0;
var child_process_1 = require("child_process");
var fs_1 = require("fs");
function findAndReplace(find, replace) {
    var _ = [];
    var w = false;
    var flagObject = { w: w };
    var flagKeys = Object.keys(flagObject);
    var fs = flagKeys
        .filter(function (flagKey) { return flagObject[flagKey]; });
    var flags = fs.length ? " -" + fs.join(' -') : '';
    var findFilesCmd = "git grep --name-only " + flags + " -F \"" + find + "\"";
    if (_ && _.length) {
        findFilesCmd += " -- " + _.join(' ');
    }
    var files = (0, child_process_1.execSync)(findFilesCmd).toString().split('\n').filter(function (f) { return f && f.trim().length; });
    if (replace) {
        var jsFind_1 = w ? "\\b" + find + "\\b" : find;
        files.forEach(function (f) {
            var content = (0, child_process_1.execSync)("cat " + f).toString();
            var modified = content.replace(new RegExp(jsFind_1, 'g'), replace);
            (0, fs_1.writeFile)(f, modified, function (err) {
                err && console.error("failed to write file " + f + " :::>", err);
            });
        });
    }
    else {
        files.forEach(function (f) { return console.log(f); });
    }
}
exports.findAndReplace = findAndReplace;
