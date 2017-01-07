console.log('Starting app.js');


//const os = require('os');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const _ = require('lodash');


const notes = require('./notes');


console.log("Addition of 2 nos",notes.add(1,2));

console.log(_.isString(true));
console.log(_.isString('Andrew'));

var filteredArray = _.uniq([1,2,3,2,2,1,2,3,2,1,2,3,'Andrew','Mike','Narayanan','Girija']);
console.log(filteredArray);



// function readFileAndMakeDir(){
//     return fs.readFileAsync('dir/file')
//         .then(function(fileData){
//             return fs.mkdirAsync('dir/file');
//         });
// }

// readFileAndMakeDir().then(function(){
//     return fs.writeFileAsync('dir/newdir/file.txt');
// });

// fs.readFileAsync('dir/file-to-read')
//     .then(function(fileData){
//         return fs.mkdirAsync('dir/dir');
//     })
//     .then(function(){
//          return fs.writeFileAsync('dir/file.txt');
//     })
//     .catch(function(error){
//         console.log(error);
//     });

//     function readAndDoSomething(){
//         return fs.readFileAsync('dir/file.txt')
//             .then(function(fileData){
//                     return fs.mkdirAsync('dir/file.txt');
//             });
//     }

//     readFileAndMakeDir().then(function(){
//         return fs.writeFileAsync('dir/file.txt');
//     });

//     fs.readFileAsync('dir/file.txt')
//         .then(function(fileData){
//             return fs.mkdirAsync('dir/file.txt');
//         })
//         .then(function(error){
//             return fs.writeFileAsync('dir/file.txt');
//         })
//         .catch(function(error){
//             console.log(error);
//         });

//     const Promise = require('bluebird');
//     const fs = Promise.promisifyAll(require('fs'));

//     module.exports = function(){
//         return new Promise(function(resolve,reject){
//             tradingCallbacks(function(err,data){
//                 if(err){
//                     reject(err);
//                 }else{
//                     resolve(data);
//                 }
//             });
//         });
//     }
