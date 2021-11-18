#! /usr/bin/env node

import { kebabCase } from 'lodash';
import { TextTransformationInvoker } from '../src/text/text-transformation-invoker';

TextTransformationInvoker.transformAndPipeToStdOut(kebabCase, process.argv[2]);
