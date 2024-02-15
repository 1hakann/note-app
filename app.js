// const fs = require('fs');
const chalk = require('chalk');



// fs.writeFileSync('notes.txt', 'This file was created by Node.js!');
// fs.appendFileSync('notes.txt', ' I live in Ordu.');

const getNotes = require('./notes');

const msg = getNotes();
console.log(msg);

// NODE
// const validator = require("validator");

// ES MODULE
// import validator from "validator";

// console.log(validator.isEmail("hakan.cakmak@live.com"));
// console.log(validator.isURL("https://hakancakmak.com"));


// console.log(chalk.bold.inverse.red('Hello World!'));

// console.log(process.argv)
// console.log(process.argv[2]);

const command = process.argv[2];
if(command === "add") {
    console.log('Adding notes');
} else if(command === "remove") {
    console.log('Removing notes');
}