
/* 
    Call Stack:
    ---------

    * THis is where some items are addedand removed
    * Last added can be the first removed.
    * First Node runs the main() wrapper function
*/ 

    var x = 1; // added and removed
    var y = x +9; // added and removed
    console.log(`y is ${y}`);

    var add = (a,b)=>{
        var total = a+b;
        return total;
    };

    var res = add(3,8);
    console.log(res);

    add(); // on top of main()
    var total = a+b; // added and removed
    return total; // added and removed


    /* 
        Async example:
        ==============

         Node.js API => Registered in Node.js API

        After setTimeout is executed in Node.js API, callback is Registered in callback queue

        Event loop checks whether call stack is empty or not

        If its not empty, then it doesn't do anything.

        If its empty, then its runs the callback

        console.log('Finishing up') is run and main() gets removed from call stack.

    */
    console.log('Starting app.js');
    setTimeout(()=>{
        console.log('Inside callback');
    },2000);
    
    setTimeout(()=>{
        console.log('Second Timeout');
    },0);
    
    console.log('Finishing up');



