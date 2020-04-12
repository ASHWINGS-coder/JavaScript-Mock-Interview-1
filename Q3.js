// Q3. Implement a function strContains(char) that I can use on any string and it returns true/false if the character “char” is present on a string (optimize it as much as possible)

var str = "I am a string";

// includes() method determines whether the string contains the character or no and return true or false respectively

function strContains(val){
    return  str.includes(val);
   }
   
console.log(strContains('q'));

// ========== without function ========

console.log('a nice string'.includes('nice'));

// =============Output================

console.log(strContains('q'));
// false

console.log(strContains('a'));
// true