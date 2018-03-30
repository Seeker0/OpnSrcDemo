const Linter = require('eslint').CLIEngine;
const linter = new Linter();
let case1 = require('./case1.js');
const prettier = require('prettier');

console.log(prettier.format(case1))
