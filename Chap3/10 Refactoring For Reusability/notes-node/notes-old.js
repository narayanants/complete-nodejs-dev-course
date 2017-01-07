console.log('Starting notes.js');

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

var addNote = (title, body) => {
    var notes = [],
        note = {
            title,
            body
        };

    try {
        var noteString = fs.readFileSync('notes-data.json'),
            notes = JSON.parse(noteString);
    } catch (e) {

    }

    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

var getAll = () => {
    console.log('Listing all notes');
};

var getNote = (title) => {
    console.log('Reading note', title);
}

var removeNote = (title) => {
    console.log('Removing note', title);
};


module.exports = {
    //addNote:addNote similar to below
    addNote,
    getAll,
    getNote,
    removeNote
};

/* 
 => node app.js add --title "to buy" body "food"
    Starting app.js
    Starting notes.js
    Command add
    Yargs { _: [ 'add', 'body', 'food' ], title: 'to buy', '$0': 'app.js' }
    Adding new note
    vicky@vicky-Inspiron-N5040:~/Desktop/Nodejs/complete-nodejs-dev-course/Chap3/10 Refactoring For Reusability/notes-node$
    node app.js add --title "to buy" body "food"
    Starting app.js
    Starting notes.js
    Command add
    Yargs { _: [ 'add', 'body', 'food' ], title: 'to buy', '$0': 'app.js' }
    Adding new note
    Note title taken


 => node app.js add --title "to buy items" --body "fish"
    Starting app.js
    Starting notes.js
    Command add
    Yargs { _: [ 'add' ],
    title: 'to buy items',
    body: 'fish',
    '$0': 'app.js' }
    Adding new note
    Note created!
    -------
    Title: to buy items
    Body: fish


*/