export class FunctionParser {
    static parseFunctionArguments (functionBody) {
        return functionBody.split('(')[1].split(')')[0].split(',').map(s => s.trim());
    }
}