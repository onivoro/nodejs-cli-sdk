const yargs = require("yargs-parser");

const processArgs = process.argv.slice(2);
const args = yargs(processArgs);
console.log(args);