// var obj = {
//     name:'Narayanan'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Narayanan","age":25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

var originalNote = {
    title:'Sometitle',
    body:'Somebody'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFile('notes.json',originalNoteString);



fs.readFileAsync('notes.json')
    .then((data)=>{
        return JSON.parse(data);
    })
    .then((resulData)=>{
        console.log(typeof resulData);
        console.log(resulData.title);
    })
    .catch((error)=>{
        if(err) {
            return console.log(err);
        }
    });
   

