"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const FunctionParser_1 = require("../utils/FunctionParser");
const arg_parser_1 = require("./arg-parser");
function exec(main, processArgs = process.argv.slice(2), consoleLog = console.log.bind(console)) {
    const cliArgs = (0, arg_parser_1.argParser)(processArgs);
    const fnArgs = FunctionParser_1.FunctionParser.parseFunctionArguments(`${main}`);
    if (cliArgs === null) {
        consoleLog(`Expected the following:\n${fnArgs.join(', \n')}`);
    }
    else {
        const fnVals = fnArgs.map(fa => cliArgs[fa]);
        consoleLog(main.apply(main, fnVals));
    }
}
exports.exec = exec;
//# sourceMappingURL=exec.js.map