const Linter = require('eslint').CLIEngine;
const linter = new Linter();
let case1 = require('./case1.js');

console.log(case1);
console.log(linter.executeOnFiles(case1));
