const fs = require('fs');
const os = require('os');

//Append File

console.log('Starting app');
fs.appendFile('greetings.txt','Hello world!',function(err){
    if(err) console.log('unable to write to file!');
});


//print user info using OS module
fs.appendFile('greetings.txt','Hello'+user.username + '!',function(err){
    if(err) console.log('unable to write to file!');
});