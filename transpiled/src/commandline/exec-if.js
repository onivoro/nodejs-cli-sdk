"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execIf = void 0;
const FunctionParser_1 = require("../utils/FunctionParser");
const arg_parser_1 = require("./arg-parser");
function execIf(main, otherwise) {
    const cliArgs = (0, arg_parser_1.argParser)(process.argv);
    const fnArgs = FunctionParser_1.FunctionParser.parseFunctionArguments(`${main}`);
    const fnVals = fnArgs.map(fa => cliArgs[fa]);
    if (fnArgs
        .reduce((valid, arg) => valid && cliArgs[arg], true)) {
        main.apply(main, fnVals);
    }
    else {
        console.log(`Expected the following:\n${fnArgs.join(', \n')}`);
        console.log(`Received the following:\n${Object.entries(cliArgs).map(e => `${e[0]}: ${e[1]}`)}`);
        if (otherwise) {
            console.log(`invoking otherwise`);
            otherwise(cliArgs, fnArgs, fnVals);
        }
    }
}
exports.execIf = execIf;
//# sourceMappingURL=exec-if.js.map