// Q6. Explain the concept of prototypes in JS. How is it related to Classes in ES6

// ======= Answer ==========

 Almost every object is linked to another object . That linked object is called the prototype.

 Objects inherit properties and methods from prototype ancestry
 (a obj can have a prototype the prototype can also have a prototype hence called prototype ancestry or prototypr chain)

 prototype is automatically assigned to any object

we can define an objects's prototype

//  ====== example ========
const obj = {a: 100};

console.log(obj);

// +++++++ o/p ++++++
{a: 100}
a: 100
__proto__: // this is a prototype automatically assigned to any object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

//  another example 

var obj = {} //  we have an object there is nothing in it 
 ==> undefined

 // we dint put any properties or methods as a part of that object

 // we can do this 
 obj.toString();
 ==> "[object Object]" // displays info to console its because it is a part of prototype

 // if we intialise obj.toString with a function
 obj.toString = function(){console.log("object");}

 // and console it 
 obj.toString()
 ==> object

 // it keeps the one that is on the object and exectues that it doesnt execute the one in prototype

 // if we open onj now we have somethinf in our object 
 obj
{toString: ƒ}toString: ƒ ()__proto__: Object
// but we still have a link to prototype

// Anything but primitive datatypes are objects in js so an array is an object

var arr = [1,2,3]

arr.indexOf(2);
==> 1

// why is indexOf available because it is a part of prototype
arr
(3) [1, 2, 3]
0: 1
1: 2
2: 3
length: 3
__proto__: Array(0)
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()  // here it is 
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
__proto__: Object