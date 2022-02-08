"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execIf = void 0;
const FunctionParser_1 = require("../utils/FunctionParser");
const arg_parser_1 = require("./arg-parser");
function execIf(main, otherwise, processArgs = process.argv.slice(2), consoleLog = console.log.bind(console)) {
    const cliArgs = (0, arg_parser_1.argParser)(processArgs);
    const fnArgs = FunctionParser_1.FunctionParser.parseFunctionArguments(`${main}`);
    const fnValsFn = () => fnArgs.map(fa => cliArgs[fa]);
    if (cliArgs === null) {
        consoleLog(`Expected the following:\n${fnArgs.join(', \n')}`);
    }
    else if (fnArgs
        .reduce((valid, arg) => valid && cliArgs[arg], true)) {
        main.apply(main, fnValsFn());
    }
    else {
        consoleLog(`Expected the following:\n${fnArgs.join(', \n')}`);
        consoleLog(`Received the following:\n${Object.entries(cliArgs).map(e => `${e[0]}: ${e[1]}`)}`);
        if (otherwise) {
            consoleLog(`invoking otherwise`);
            otherwise(cliArgs, fnArgs, fnValsFn());
        }
    }
}
exports.execIf = execIf;
//# sourceMappingURL=exec-if.js.map