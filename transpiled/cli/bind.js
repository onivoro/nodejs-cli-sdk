#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryPackager_1 = require("../src/packaging/BinaryPackager");
const help_me_1 = require("../src/commandline/help-me");
const arg_parser_1 = require("../src/commandline/arg-parser");
const { name } = (0, arg_parser_1.argParser)();
(0, help_me_1.helpMe)(bind, () => bind(name));
function bind(name) {
    BinaryPackager_1.BinaryPackager.buildWithDefaults(name);
}
//# sourceMappingURL=bind.js.map