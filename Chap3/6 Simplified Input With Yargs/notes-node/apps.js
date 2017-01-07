console.log('Starting app.js');

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const _ = require('lodash');
const yargs = require('yargs').argv;

const notes = require('./notes1');

var command = yargs._[0];
console.log('Command',command);
console.log('process',process.argv);
console.log('Yargs',yargs);

if(command === 'add'){
    notes.addNote(yargs.title,yargs.body);
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    notes.getNote(yargs.title);
}else if(command === 'remove'){
    notes.removeNote(yargs.title);
}else{
    console.log('Command not recognized');
}