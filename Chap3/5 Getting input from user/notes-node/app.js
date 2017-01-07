console.log('Starting app.js');


//const os = require('os');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const _ = require('lodash');


const notes = require('./notes');

// Registering command line args

var command = process.argv[2];
console.log('Command',command);
console.log(process.argv);

if(command === 'add'){
    console.log("Adding new note");
}else if(command === 'list'){
    console.log('Listing all notes');
}else if(command === 'read'){
    console.log('Reading notes');
}else if(command === 'remove'){
    console.log('Removing notes');
}else{
    console.log('Command not recognized');
}


