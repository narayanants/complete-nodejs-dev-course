console.log('Starting notes.js');

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

var fetchNotes = ()=>{
    try{
        var noteString = fs.writeFileSync('notes-data.json',JSON.stringify(notes));
        return JSON.parse(noteString);
    }catch(e){
        return [];
    }
};

var saveNotes = (notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title,body)=>{
    var notes = fetchNotes(),
        note = {
            title,
            body
        },
        duplicateNotes = notes.filter((note)=>note.title === title);
        if(duplicateNotes.length === 0){
            notes.push(note);
            saveNotes(notes);
            return note;
        }
};

var getAll = ()=>{
    console.log('Listing all notes');
};

var getNote = (title)=>{
    console.log('Reading note',title);
};

var removeNote = (title)=>{
    var notes = fetchNotes();
    var fitleredNotes = notes.filter((note)=>note.title === title);
    saveNotes(fitleredNotes);
};

module.exports = {
    addNote,
    removeNote,
    getAll,
    getNote
}
