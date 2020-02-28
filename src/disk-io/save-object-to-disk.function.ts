import { writeFile } from 'fs';
import { logError } from './log-error.function';

export function saveObjectToDisk(object, outputPath: string, file: string, errorHandler?) {
  const path = `${outputPath}/`.replace('//', '/');
  writeFile(`${path}${file}`, JSON.stringify(object, null, 2), errorHandler || logError);
}
