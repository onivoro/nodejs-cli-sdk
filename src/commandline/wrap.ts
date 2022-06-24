import { FunctionParser } from "../utils/FunctionParser";
// import { argParser } from "./arg-parser";
import * as yargs from 'yargs-parser';

export function wrap(main: Function, processArgs = process.argv.slice(2), consoleLog = console.log.bind(console)) {
    const cliArgs = yargs(processArgs);
    const fnArgs = FunctionParser.parseFunctionArguments(`${main}`);
    
    if (cliArgs.help) {
        consoleLog(`Expected the following:\n${fnArgs.join(', \n')}`);        
    } else {
        const fnVals = fnArgs.map(fa => cliArgs[fa]);
        consoleLog(main.apply(main, fnVals));
    }
}