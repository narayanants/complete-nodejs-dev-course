/* Yargs { _: [], '$0': 'app.js' }

    _ is where cli args are stored

    node app.js add encrypted
    Yargs { _: [ 'add', 'encrypted' ], '$0': 'app.js' }

    node app.js add --title="secrets from andrew"
    Yargs { _: [ 'add' ], title: 'secrets', '$0': 'app.js' }

    node app.js add --title="Secret" --body="This is my Secret"
    Yargs { _: [ 'add' ],  title: 'Secret',  body: 'This is my Secret',  '$0': 'app.js' }

*/


console.log('Starting app.js');


//const os = require('os');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes');
const argv = yargs.argv;

// Registering command line args

//var command = process.argv[2];
var command = argv._[0];
console.log('Command',command);
//console.log('Process',process.argv);
console.log('Yargs',argv);



if(command === 'add'){
    console.log("Adding new note");
    notes.addNote(argv.title,argv.body); // Requires a title
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    notes.getNote(argv.title);
}else if(command === 'remove'){
    notes.removeNote(argv.title);
}else{
    console.log('Command not recognized');
}


