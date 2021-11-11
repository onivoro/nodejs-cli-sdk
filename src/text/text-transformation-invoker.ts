export class TextTransformationInvoker {
    static transformAndPipeToStdOut(fn: Function, input: string) {
        console.log(fn(input));
    }
}