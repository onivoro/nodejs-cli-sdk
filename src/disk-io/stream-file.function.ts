import { createReadStream } from 'fs';
import { Observable } from 'rxjs';
import * as readline from 'readline';

export function streamFile(path: string, enc) {
  return new Observable<string>(o => {
    const readInterface = readline.createInterface({
      input: createReadStream(path, enc),
      output: process.stdout,
      terminal: false
    });

    readInterface.on('line', line => o.next(line));
    readInterface.on('error', e => o.error(e));
    readInterface.on('close', () => o.complete());

    function tearDownLogic() {
      readInterface.close();
    }

    return tearDownLogic;
  });
}
