import * as fs from 'fs';
import * as path from 'path';

const identity = i => i;

export function getDirs (relativePath?: string, showDotDirs = false, showNodeModules = false): string[] {
  return getDirsAtPath(process.cwd(), relativePath, showDotDirs, showNodeModules);
};

export function getDirsAtPath (cwdOverride: string, relativePath = '.', showDotDirs = false, showNodeModules = false): string[] {
  try {
    const resolvedRelativePath = path.resolve(cwdOverride || process.cwd(), relativePath);
    return fs.readdirSync(resolvedRelativePath)
      .filter(itemPath => fs.statSync(path.resolve(resolvedRelativePath, itemPath)).isDirectory())
      .filter(showDotDirs ? identity : dir => dir[0] !== '.')
      .filter(showNodeModules ? identity : dir => dir !== 'node_modules');
  } catch (e) {
    return [];
  }
};
