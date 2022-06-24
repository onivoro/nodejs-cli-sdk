"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpMe = void 0;
const FunctionParser_1 = require("../utils/FunctionParser");
const arg_parser_1 = require("./arg-parser");
const colors_1 = require("./colors");
function helpMe(main, fn) {
    const { help } = (0, arg_parser_1.argParser)();
    if (help) {
        const fnArgs = FunctionParser_1.FunctionParser.parseFunctionArguments(`${main}`);
        console.log(`${(0, colors_1.red)('General Instructions Regarding Parameter Order:')}`);
        console.log('');
        console.log(`${(0, colors_1.cyan)('Flags')} should be first (single letters).`);
        console.log(`${(0, colors_1.cyan)('Options')} (words) come next.`);
        console.log(`${(0, colors_1.cyan)('_')} (an underscore) is last representing non-keyed args.`);
        console.log('');
        console.log('');
        console.log(`${(0, colors_1.red)('General Instructions Regarding Parameter Values:')}`);
        console.log('');
        console.log(`If a ${(0, colors_1.cyan)('flag')} or ${(0, colors_1.cyan)('option')} is not followed by a value then it will have boolean value ${(0, colors_1.cyan)('true')}.`);
        console.log(`Neither ${(0, colors_1.cyan)('flags')} nor ${(0, colors_1.cyan)('options')} need an equal sign "${(0, colors_1.cyan)('=')}".`);
        console.log('');
        console.log('');
        console.log(`${(0, colors_1.red)('Specific Parameters and Defaults for This Program (If Any):')} ${(0, colors_1.cyan)(process.argv[1])} ${(0, colors_1.red)('=>')}`);
        console.log('');
        console.log((0, colors_1.green)(fnArgs.map(asHelpParameter).join('\n')));
    }
    else {
        fn();
    }
}
exports.helpMe = helpMe;
function asHelpParameter(param) {
    const p = param.split('=')[0].trim();
    if (p === '_') {
        return param;
    }
    return p.length > 1 ? `--${param}` : `-${param}`;
}
//# sourceMappingURL=help-me.js.map