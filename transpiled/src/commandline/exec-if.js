"use strict";
exports.__esModule = true;
exports.execIf = void 0;
var FunctionParser_1 = require("../utils/FunctionParser");
var arg_parser_1 = require("./arg-parser");
function execIf(main, otherwise) {
    var cliArgs = (0, arg_parser_1.argParser)(process.argv);
    var fnArgs = FunctionParser_1.FunctionParser.parseFunctionArguments("" + main);
    var fnVals = fnArgs.map(function (fa) { return cliArgs[fa]; });
    if (fnArgs
        .reduce(function (valid, arg) { return valid && cliArgs[arg]; }, true)) {
        main.apply(main, fnVals);
    }
    else {
        console.log("Expected the following:\n" + fnArgs.join(', \n'));
        console.log("Received the following:\n" + Object.entries(cliArgs).map(function (e) { return e[0] + ": " + e[1]; }));
        if (otherwise) {
            console.log("invoking otherwise");
            otherwise(cliArgs, fnArgs, fnVals);
        }
    }
}
exports.execIf = execIf;
