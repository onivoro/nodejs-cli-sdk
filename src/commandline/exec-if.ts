import { FunctionParser } from "../utils/FunctionParser";
import { argParser } from "./arg-parser";

export function execIf(main: Function, otherwise?: Function, processArgs = process.argv.slice(2), consoleLog = console.log.bind(console)) {

    const cliArgs = argParser(processArgs);
    const fnArgs = FunctionParser.parseFunctionArguments(`${main}`);

    const fnValsFn = () => fnArgs.map(fa => cliArgs[fa]);

    if (cliArgs === null) {
        consoleLog(`Expected the following:\n${fnArgs.join(', \n')}`);
    } else if (fnArgs
        .reduce((valid, arg) => valid && cliArgs[arg], true)) {

        main.apply(main, fnValsFn());
    } else {
        consoleLog(`Expected the following:\n${fnArgs.join(', \n')}`);
        consoleLog(`Received the following:\n${Object.entries(cliArgs).map(e => `${e[0]}: ${e[1]}`)}`);

        if (otherwise) {
            consoleLog(`invoking otherwise`);
            otherwise(
                cliArgs,
                fnArgs,
                fnValsFn(),
            );
        }
    }
}