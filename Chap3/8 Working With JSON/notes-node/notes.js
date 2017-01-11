console.log('Starting notes.js');

var addNote = (title,body)=>{
    console.log('Adding Note',title,body);
};

var getAll = ()=>{
    console.log('Listing all notes');
};

var getNote = (title)=>{
    console.log('Reading note',title);
}

var removeNote = (title)=>{
    console.log('Removing note',title);
};


module.exports = {
    //addNote:addNote similar to below
    addNote,
    getAll,
    getNote,
    removeNote
};






