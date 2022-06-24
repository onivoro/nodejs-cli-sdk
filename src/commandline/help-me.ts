import { FunctionParser } from "../utils/FunctionParser";
import { argParser } from "./arg-parser";
import { cyan, green, red } from "./colors";

export function helpMe(main: Function, fn: Function) {
    const { help } = argParser();

    if (help) {
        const fnArgs = FunctionParser.parseFunctionArguments(`${main}`);
        console.log(`${red('General Instructions Regarding Parameter Order:')}`);
        console.log('');
        console.log(`${cyan('Flags')} should be first (single letters).`);
        console.log(`${cyan('Options')} (words) come next.`);
        console.log(`${cyan('_')} (an underscore) is last representing non-keyed args.`);
        console.log('');
        console.log('');
        console.log(`${red('General Instructions Regarding Parameter Values:')}`);
        console.log('');
        console.log(`If a ${cyan('flag')} or ${cyan('option')} is not followed by a value then it will have boolean value ${cyan('true')}.`);
        console.log(`Neither ${cyan('flags')} nor ${cyan('options')} need an equal sign "${cyan('=')}".`);
        console.log('');
        console.log('');
        console.log(`${red('Specific Parameters and Defaults for This Program (If Any):')} ${cyan(process.argv[1])} ${red('=>')}`);
        console.log('');
        console.log(green(fnArgs.map(asHelpParameter).join('\n')));
    } else {
        fn();
    }
}

function asHelpParameter(param: string) {
    const p = param.split('=')[0].trim();

    if (p === '_') {
        return param;
    }

    return p.length > 1 ? `--${param}` : `-${param}`;
}