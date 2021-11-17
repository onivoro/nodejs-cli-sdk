"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAwsProfiles = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const PROFILES = /\[.*\]/g;
function getAwsProfiles() {
    try {
        const credPath = (0, path_1.resolve)(process.env.HOME, '.aws/credentials');
        return (0, fs_1.readFileSync)(credPath, 'utf8')
            .match(PROFILES)
            .map(p => p.replace('[', '').replace(']', ''));
    }
    catch (_e) {
        return null;
    }
}
exports.getAwsProfiles = getAwsProfiles;
//# sourceMappingURL=get-aws-profiles.js.map