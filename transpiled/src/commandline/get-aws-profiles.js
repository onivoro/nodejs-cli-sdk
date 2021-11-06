"use strict";
exports.__esModule = true;
exports.getAwsProfiles = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var PROFILES = /\[.*\]/g;
function getAwsProfiles() {
    try {
        var credPath = (0, path_1.resolve)(process.env.HOME, '.aws/credentials');
        return (0, fs_1.readFileSync)(credPath, 'utf8')
            .match(PROFILES)
            .map(function (p) { return p.replace('[', '').replace(']', ''); });
    }
    catch (_e) {
        return null;
    }
}
exports.getAwsProfiles = getAwsProfiles;
