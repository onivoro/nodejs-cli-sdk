#! /usr/bin/env node

import { snakeCase } from 'lodash';
import { TextTransformationInvoker } from '../src/text/text-transformation-invoker';

TextTransformationInvoker.transformAndPipeToStdOut(snakeCase, process.argv[2]);
