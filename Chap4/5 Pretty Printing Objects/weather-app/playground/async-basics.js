console.log('Starting app.js');

setTimeout(()=>{
    console.log('Inside of callback');
},2000); // similar to addEventListener

setTimeout(()=>{
    console.log('Second setTimeout');
},0)

console.log('Finishing up');