#! /usr/bin/env node

import { TextTransformationInvoker } from '../src/text/text-transformation-invoker';

TextTransformationInvoker.transformAndPipeToStdOut(s => s?.toUpperCase?.(), process.argv[2]);
