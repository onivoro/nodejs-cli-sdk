"use strict";
exports.__esModule = true;
exports.argParser = void 0;
var DOUBLE_DASH = /^--/;
function isFlag(arg) {
    return arg && DOUBLE_DASH.test(arg);
}
function fromFlag(arg) {
    return arg && arg.replace(DOUBLE_DASH, '');
}
function helpRequested(args) {
    return args && args.length == 1 && args[0].replace(DOUBLE_DASH, '') === 'help';
}
function argParser(args) {
    if (helpRequested(args)) {
        return null;
    }
    var output = {};
    for (var i = 0; i < args.length; i++) {
        var current = args[i];
        var next = args[i + 1];
        if (isFlag(current)) {
            output[fromFlag(current)] = next;
        }
    }
    return output;
}
exports.argParser = argParser;
