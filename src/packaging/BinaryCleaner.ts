import {execSync} from 'child_process';
import {parse} from 'path';

export class BinaryCleaner {

  static deleteBinaryLink (command: string, execSyncOverride?: (cmd: string) => Buffer) {
    const bash = execSyncOverride || execSync;
    const dir = BinaryCleaner.getNodeBin();
    dir && bash((`rm -rf ${dir}/${command}`));
  }

  static getNodeBin (execSyncOverride?: (cmd: string) => Buffer): string {
    const bash = execSyncOverride || execSync;

    try {
      const filePathToTest = bash(`which npm`)
        .toString()
        .split('\n')
        .filter(i => i && i.length)[0];

      const {dir} = parse(filePathToTest);

      console.log(dir);

      return dir;
    }
    catch (e) {
      return '';
    }
  }
}