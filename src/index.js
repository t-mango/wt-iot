#! /usr/bin/env node

const chalk = require("chalk");

console.log(chalk.blue('hello world'));

const log = console.log;

log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

log(chalk.keyword('orange')('Yay for orange colored text!'));