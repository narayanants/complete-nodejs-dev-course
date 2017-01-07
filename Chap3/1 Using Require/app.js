'use strict';
console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

var res = notes.addNote();
console.log(res);



// var user = os.userInfo();


// fs.appendFile('greetings.txt','Hello'+user.username + '! You are ' + notes.age +'!',function(err){
//     if(err) console.log('unable to write to file!');
// });


// //Using template strings
// fs.appendFile('greetings1.txt',`Hello ${user.username}! You are ${notes.age}`,(err)=>{
//     if(err) console.log('unable to write to file!');
// });


'use strict';
console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
var user = os.userInfo();

fs.appendFile('greetings.txt','Hello' + user.username + '!',function(err){
    console.log('Unable to write to disk');
});

fs.appendFile('greetings1.txt',`Hello ${user.username}`,(err)=>{
    console.log('Unable to write to disk');
})


