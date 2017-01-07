var getUseSync = require('./getUseSync');

var user1 = getUseSync('user1');
console.log('user1',user1);

var user2 = getUseSync('user2');
console.log('user2',user2);

var user3 = getUseSync('user3');
console.log('user3',user3);

var sum = 1+2;
console.log('The sum is '+sum);


//non-blocking
var getUser = require('./getUser');

var user1 = getUser('user1');
console.log('user1',user1);

var user2 = getUser('user2');
console.log('user2',user2);

var sum = 1 +2;
console.log(sum);
