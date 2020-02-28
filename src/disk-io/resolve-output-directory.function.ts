import { resolve } from 'path';

export const resolveOutputDirectory = (subDirectory: string, parentDirectory: string) => {
  return resolve(parentDirectory, subDirectory);
};
