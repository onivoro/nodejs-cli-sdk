import { FunctionParser } from "../utils/FunctionParser";
import { argParser } from "./arg-parser";

export function execIf(main: Function, otherwise?: Function) {

    const cliArgs = argParser(process.argv.slice(2));
    const fnArgs = FunctionParser.parseFunctionArguments(`${main}`);
    const fnVals = fnArgs.map(fa => cliArgs[fa]);

    if (fnArgs
        .reduce((valid, arg) => valid && cliArgs[arg], true)) {

        main.apply(main, fnVals);
    } else {
        console.log(`Expected the following:\n${fnArgs.join(', \n')}`);
        console.log(`Received the following:\n${Object.entries(cliArgs).map(e => `${e[0]}: ${e[1]}`)}`);

        if (otherwise) {
            console.log(`invoking otherwise`);
            otherwise(
                cliArgs,
                fnArgs,
                fnVals,
            );
        }
    }
}