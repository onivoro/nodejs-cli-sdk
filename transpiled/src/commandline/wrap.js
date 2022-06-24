"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrap = void 0;
const FunctionParser_1 = require("../utils/FunctionParser");
// import { argParser } from "./arg-parser";
const yargs = require("yargs-parser");
function wrap(main, processArgs = process.argv.slice(2), consoleLog = console.log.bind(console)) {
    const cliArgs = yargs(processArgs);
    const fnArgs = FunctionParser_1.FunctionParser.parseFunctionArguments(`${main}`);
    if (cliArgs.help) {
        consoleLog(`Expected the following:\n${fnArgs.join(', \n')}`);
    }
    else {
        const fnVals = fnArgs.map(fa => cliArgs[fa]);
        consoleLog(main.apply(main, fnVals));
    }
}
exports.wrap = wrap;
//# sourceMappingURL=wrap.js.map