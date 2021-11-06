"use strict";
exports.__esModule = true;
exports.profileParameter = void 0;
var get_aws_profiles_1 = require("./get-aws-profiles");
var parameter_1 = require("./parameter");
exports.profileParameter = new parameter_1.Parameter('profile', (0, get_aws_profiles_1.getAwsProfiles)());
