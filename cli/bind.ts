#! /usr/bin/env node

import { BinaryPackager } from "../src/packaging/BinaryPackager";
import { helpMe } from "../src/commandline/help-me";
import { argParser } from "../src/commandline/arg-parser";

const { name } = argParser();

helpMe(bind, () => bind(name))

function bind (name) {
    BinaryPackager.buildWithDefaults(name);
}
