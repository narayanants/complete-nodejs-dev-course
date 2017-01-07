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