"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileParameter = void 0;
const get_aws_profiles_1 = require("./get-aws-profiles");
const parameter_1 = require("./parameter");
exports.profileParameter = new parameter_1.Parameter('profile', (0, get_aws_profiles_1.getAwsProfiles)());
//# sourceMappingURL=profile.parameter.js.map