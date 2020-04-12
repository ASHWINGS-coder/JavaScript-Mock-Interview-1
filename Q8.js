// Q8. Why do we need Async/Await. Explain a little about how and why we reached here, with relevant examples

// The async keywprd before a function has two effects
// 1.Makes it  always return a promise
//  Allows await to be used in it

// The await kryword before a promise makes JS wait until that promise settels ans then
//  1.is it's an error the exception is generated - same as if throw error were called at that very place
// 2.Otherwise, it returns the result

//  Together they provide a great framework to write asynchronus code that is both easy to read and write 

// With async/await we rarely need to write prmoise.then/catch 

//Lets start with async it is placed in front of function 
async function f(){
    return 1;
}

// The word async before the function means it will return a promise

//  AWAIT
// works only inside async function eg:
let value = await promise;

// The keyword await makes the JS wait until that promise settles and returns its result

async function f(){
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve("done"),1000)
    })

    let result = await promise; //  wait until the promise resolves (#)

    alert(result); // "done"
}

f();

// the function execution "pauses" at the line (#) and resumes when the promise settles , with the result .
//  await litrelly makes JS wait until the promise settles.


