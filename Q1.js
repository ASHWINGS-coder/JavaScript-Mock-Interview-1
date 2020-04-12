// Q1. Implement customMap() function for JS arrays. The functionality should be exactly the same as that of JS native .map() function. Function customMap() should return a new array and not change the array on which we are mapping

// initializing array 
var numbers = [6, 4, 1, 4];

// calling map() Method on array and storing result in newarray
// the map creates a new array with the results of callig function for every element in an array the map method calls the function once for each element in the array 

var newarray = numbers.map(customMap)
// we are calling customMap function here and squaring the number and returning the squared value to newarray
function customMap(num) {
  return num * num;
}

console.log(numbers);
console.log(newarray);

// ============================ Output================================


// Original Array
[6, 4, 1, 4]

// Modified Array
[36, 16, 1, 16]


