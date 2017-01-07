console.log('Starting notes1.js');

var addNote = (title,body)=>{
    console.log('Adding Note',title,body);
}

var getAll = ()=>{
    console.log('Listing notes');
}

var getNote = (title)=>{
    console.log('Read Note',title);
}

var removeNote = (title)=>{
    console.log('Removing note',title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}