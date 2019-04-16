#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var BinaryPackager_1 = require("./src/packaging/BinaryPackager");
BinaryPackager_1.BinaryPackager.buildWithDefaults('voro', 'nodejs-cli-sdk');
