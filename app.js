// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'This file was created by Node.js!');
// fs.appendFileSync('notes.txt', ' I live in Ordu.');

// const getNotes = require('./notes');

// const msg = getNotes();
// console.log(msg);

// NODE
const validator = require("validator");

// ES MODULE
// import validator from "validator";

console.log(validator.isEmail("hakan.cakmak@live.com"));
console.log(validator.isURL("https://hakancakmak.com"));