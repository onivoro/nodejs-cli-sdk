#! /usr/bin/env node

import { snakeCase } from 'lodash';
import { TextTransformationInvoker } from '../src/text/text-transformation-invoker';

TextTransformationInvoker.transformAndPipeToStdOut((s) => snakeCase(s)?.toUpperCase(), process.argv[2]);
