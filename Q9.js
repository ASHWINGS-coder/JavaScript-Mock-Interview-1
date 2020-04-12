// Q9. Why do we need let and const in JS. Compare it with the problems in ES5

// const and let are both block scoped 
// var is function scoped 
// having only function scoped (var) was having some issues so block scoped (const and let) came into existence

if(true){
    var varVariable = "this is true"
}

console.log(varVariable);

if(true){
    let letVariable = "This is true"
}

console.log(letVariable);

// o/p 
// this is true
// VM2018:1 "ReferenceError: letVariable is not defined
//     at <anonymous>:13:13"
//  this is because var is function scoped so o/p was as expected but let is block scoped so we caught up with an error

// if we put log statement inside if we get the expected o/p
if(true){
    var varVariable = "this is true"
}

console.log(varVariable);

if(true){
  //const letVariable = "This is true"
    let letVariable = "This is true"
    console.log(letVariable);
}

//=====================================================================

//o/p

//=====================================================================

this is true
This is true
// this is exactly same if we defined it with const

//===================================================

 var variables can be re-assigned multiple times but this can not be done with const and let

//=====================================================================

if(true){
    var varVariable = "this is true"
}

var varVariable = "this is false" // re-assigning the varVariable

console.log(varVariable);


    let letVariable = "This is true"
    let letVariable = "This is false" // re-assigning the letVariable

    console.log(letVariable);

//=====================================================================

//o/p

//     //VM2369:1 {"loc":{"line":11,"column":8},"_babel":true,     "codeFrame":"   9 | 
//   10 |     let letVariable = "This is true"
//   > 11 |     let letVariable = "This is false"
//        |         ^"}

//=====================================================================
 This is the biggest problem with var variable because it will let you to over-ride a value even if you dint want to do so 
//=====================================================================

//=====================================================================
var allows to use a variable even before it is declared but with const and let it is not possible
//=====================================================================

console.log(varVariable);

var varVariable = 'true';

console.log(varVariable);

//=====================================================================
o/p =  undefined
       true
This is because var allows to use variable even before declared
but let and const will not work this way
//=====================================================================

console.log(letVariable);

let letVariable = 'true';

console.log(letVariable);

//=====================================================================
o/p = error
same with const except for const will not allow to re-declare a variable 
//=====================================================================

const constVar = 1;
let letVar = 1;

constVar = 2;
letVar=2;

//=====================================================================
o/p
//=====================================================================
SyntaxError: Babel: "constVar" is read-only
  3 | let letVar = 1;
  4 | 
> 5 | constVar = 2;
    | ^
  6 | letVar=2;
//=====================================================================

