#! /usr/bin/env node

import { execSync } from "child_process";
import { BinaryPackager } from "../src/packaging/BinaryPackager";
import { argParser } from '../src/commandline/arg-parser';

const {name, src} = argParser(process.argv) as {name: string, src: string};
BinaryPackager.buildWithDefaults(name, src);

execSync(`echo DONE!`);