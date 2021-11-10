#! /usr/bin/env node

import { BinaryPackager } from "../src/packaging/BinaryPackager";
import { execIf } from "../src/commandline/exec-if";

execIf(function bind (name) {
    BinaryPackager.buildWithDefaults(name);
})
