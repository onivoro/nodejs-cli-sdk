import { writeFile } from 'fs';
import { logError } from './log-error.function';

export function save(payload, outputPath: string, file: string, errorHandler?) {
  const path = `${outputPath}/`.replace('//', '/');
  writeFile(`${path}${file}`, payload, errorHandler || logError);
}
