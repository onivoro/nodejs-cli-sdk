export class FunctionParser {
    static parseFunctionArguments (functionBody: string): string[] {
        return functionBody.split('(')[1].split(')')[0].split(',').map(s => s.trim());
    }
}