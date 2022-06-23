import { execSync } from "child_process";
import { writeFile } from "fs";
import {GrepService} from '@onivoro/server-git';

export async function findAndReplace(find, replace, _) {    
    const files = await new GrepService().grep(find, process.cwd(), _);
    
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