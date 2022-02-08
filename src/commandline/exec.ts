import { FunctionParser } from "../utils/FunctionParser";
import { argParser } from "./arg-parser";

export function exec(main: Function, processArgs = process.argv.slice(2), consoleLog = console.log.bind(console)) {
    const cliArgs = argParser(processArgs);
    const fnArgs = FunctionParser.parseFunctionArguments(`${main}`);
    
    if (cliArgs === null) {
        consoleLog(`Expected the following:\n${fnArgs.join(', \n')}`);        
    } else {
        const fnVals = fnArgs.map(fa => cliArgs[fa]);
        consoleLog(main.apply(main, fnVals));
    }
}