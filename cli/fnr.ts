#! /usr/bin/env node

import { argParser } from '../src/commandline/arg-parser';
import { helpMe } from '../src/commandline/help-me';
import { findAndReplace } from '../src/disk-io/find-and-replace';

const { find, replace, _, w, i } = argParser();

helpMe(findAndReplace, () =>
    findAndReplace(find, replace, _, w, i)
        .catch(e => console.error(e))
)
