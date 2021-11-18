#! /usr/bin/env node

import { camelCase } from 'lodash';
import { TextTransformationInvoker } from '../src/text/text-transformation-invoker';

TextTransformationInvoker.transformAndPipeToStdOut(camelCase, process.argv[2]);
