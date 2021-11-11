#! /usr/bin/env node

import { TextTransformationInvoker } from '../src/text/text-transformation-invoker';

TextTransformationInvoker.transformAndPipeToStdOut(s => s.toLowerCase(), process.argv[2]);
