#! /usr/bin/env node

import { execIf } from '../src/commandline/exec-if';
import { findAndReplace } from '../src/disk-io/find-and-replace';

execIf(findAndReplace);