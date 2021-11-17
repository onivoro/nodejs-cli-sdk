#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryPackager_1 = require("../src/packaging/BinaryPackager");
const exec_if_1 = require("../src/commandline/exec-if");
(0, exec_if_1.execIf)(function bind(name) {
    BinaryPackager_1.BinaryPackager.buildWithDefaults(name);
});
//# sourceMappingURL=bind.js.map