// Q7. Give a relevant example of Promises

// Promises are used to handel asynchronous operation in JS.They are easy to manage when dealing with multiple asynchronous operations where call backs can create call back hell leading to un-manageable code

// this function takes call back function having two arguements resolve and reject
let promiseToCleanTheRoom = new Promise(function(resolve,reject){
     // cleaning the room
     let isClean = true;

     if(isClean){
         resolve('Clean');
     }else{
         reject('not Clean');
     }
})

// executing the promise
// there is method called when promise is resolved(then)
// when then() is fired means the promise is resolved with in this method we can have a call back function
// when resolved it will pass 'Clean' to fromResolve
// if we reject we can chain another arguement called catch to it 


promiseToCleanTheRoom.then(function(fromResolve){
    console.log('the room is' + fromResolve)
}).catch(function(fromReject){
    console.log('the room is' + fromReject)
})

//  ==========Output==========

// if   let isClean = true;
==> the room is Clean

// if   let isClean = false;
==> the room is not Clean