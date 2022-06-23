import { execSync, spawnSync } from "child_process";
import { writeFile } from "fs";

export function findAndReplace(find, replace, _) {
    const w = false;
    const flagObject = { w };
    const flagKeys = Object.keys(flagObject);
    const fs = flagKeys
        .filter(flagKey => flagObject[flagKey])

    const flags = fs.length ? ` -${fs.join(' -')}` : '';

    let findFilesCmd = `git grep --name-only ${flags} -F`;    

    const args = [...findFilesCmd.split(' ').slice(1), find, '--', ...(_ || [])].filter(Boolean);
    const {stdout, stderr} = spawnSync('git', args, {encoding: 'utf-8'});
    if(stderr) {
        console.log(stderr);
    }
    const files = stdout
        .toString().split('\n').filter(f => f && f.trim().length);    
    
    if (replace) {
        const jsFind = w ? `\\b${find}\\b` : find;
        files.forEach(f => {
            const content = execSync(`cat ${f}`).toString();
            const modified = content.replace(new RegExp(jsFind, 'g'), replace);
            writeFile(f, modified, (err) => {
                err && console.error(`failed to write file ${f} :::>`, err);
            });
        });
    } else {
        files.forEach(f => console.log(f));
    }
}