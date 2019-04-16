#! /usr/bin/env node

import {BinaryPackager} from './src/packaging/BinaryPackager';
BinaryPackager.buildWithDefaults('voro', 'nodejs-cli-sdk');
