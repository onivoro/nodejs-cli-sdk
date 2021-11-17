"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionParser = void 0;
class FunctionParser {
    static parseFunctionArguments(functionBody) {
        return functionBody.split('(')[1].split(')')[0].split(',').map(s => s.trim());
    }
}
exports.FunctionParser = FunctionParser;
// import { FunctionParser } from "../../src/utils/FunctionParser";
// describe('FunctionParser', () => {
//     let subject = FunctionParser;
//     describe('parseArguments', () => {
//         ['function <name> (', 'export function <name> (', `export const blah = function (`,].forEach((input) => {
//             describe(`when input is "${input}"`, () => {
//                 let input;
//                 beforeEach(() => {
//                     input = 'function name (p1, p2) {}'
//                 });
//                 it('returns the parameter names', () => {
//                     expect(subject.parseFunctionArguments(input)).toEqual(['p1', 'p2']);
//                 });
//             });
//         });
//     });
// });
//# sourceMappingURL=FunctionParser.js.map