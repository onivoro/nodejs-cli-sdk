import * as fs from 'fs';
import * as path from 'path';
import _ from 'lodash';
export default function (relativePath?: string, showDotDirs = false, showNodeModules = false): string[] {
  return getDirsAtPath(process.cwd(), relativePath, showDotDirs, showNodeModules);
};

export function getDirsAtPath (cwdOverride: string, relativePath = '.', showDotDirs = false, showNodeModules = false): string[] {
  try {
    const resolvedRelativePath = path.resolve(cwdOverride || process.cwd(), relativePath);
    return _(fs.readdirSync(resolvedRelativePath))
      .filter(itemPath => fs.statSync(path.resolve(resolvedRelativePath, itemPath)).isDirectory())
      .filter(showDotDirs ? _.identity : dir => dir[0] !== '.')
      .filter(showNodeModules ? _.identity : dir => dir !== 'node_modules')
      .value();
  } catch (e) {
    return [];
  }
};
