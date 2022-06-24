import * as yargsParser from 'yargs-parser';

export function argParser<T>(): T & { _?: [], help?: boolean } {
  const args: unknown = yargsParser(process.argv.slice(2));
  return args as T & { _?: [], help?: boolean };
}
