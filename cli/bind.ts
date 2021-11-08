#! /usr/bin/env node

import { BinaryPackager } from "../src/packaging/BinaryPackager";
import { argParser } from '../src/commandline/arg-parser';

const {name, src} = argParser(process.argv) as {name: string, src: string};

BinaryPackager.buildWithDefaults(name, src);
