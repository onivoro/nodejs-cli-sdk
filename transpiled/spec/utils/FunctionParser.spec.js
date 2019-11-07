"use strict";
exports.__esModule = true;
var FunctionParser_1 = require("../../src/utils/FunctionParser");
describe('FunctionParser', function () {
    var subject = FunctionParser_1.FunctionParser;
    describe('parseArguments', function () {
        ['function <name> (', 'export function <name> (', "export const blah = function (",].forEach(function (input) {
            describe("when input is \"" + input + "\"", function () {
                var input;
                beforeEach(function () {
                    input = 'function name (p1, p2) {}';
                });
                it('returns the parameter names', function () {
                    expect(subject.parseFunctionArguments(input)).toEqual(['p1', 'p2']);
                });
            });
        });
    });
});
