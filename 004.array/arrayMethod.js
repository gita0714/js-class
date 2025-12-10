/*
let arr = [1, 2, 3, 4, 5, null, , ,];

//  length : to get array length

let length = arr.length;
console.log("🚀 ~ length:", length);
*/

/*
// push : to add/push element in last
let arr = [1, 2, 3, 4, 5];
console.log("🚀 ~ arr:", arr);
arr.push(6, 8);
console.log("🚀 ~ arr:", arr);
*/

/*
// pop : to remove element in last

let arr = [1, 2, 3, 4, 5];
console.log("🚀 ~ arr:", arr)

arr.pop() // [1, 2, 3, 4]
arr.pop() // [1, 2, 3]
arr.pop() // [1, 2]
arr.pop() // [1]
console.log("🚀 ~ arr:", arr)
*/

/*
// shift : remove element in start

let arr = [1, 2, 3, 4, 5];
console.log("🚀 ~ arr:", arr)
arr.shift()
console.log("🚀 ~ arr:", arr)
*/

/*
// unshift : add element in start

let arr = [1, 2, 3, 4, 5];
console.log("🚀 ~ arr:", arr);
arr.unshift(-1, 0);
console.log("🚀 ~ arr:", arr);
*/

/*
// slice : to get sub array by giving start and end point

let arr = [1, 2, 3, 4, 5];

// first index inclusive , 2nd index exclusive
// let subArray = arr.slice(0,2) // [1,2]
let subArray = arr.slice(2)
console.log("🚀 ~ arr:", arr) // [1,2,3,4,5]
console.log("🚀 ~ subArray:", subArray)
*/

/*
// splice : to add/remove elements in array at any point

let arr = [1, 2, 3, 4, 5];

// update
// arr.splice(2,2,30)// start from 2, remove 2 , add 30
// arr.splice(2,2,30,40)// start from 2, remove 2 , add 30, 40

// add
// arr.splice(2, 0, 2.5);  // start from 2, remove 0(nothing), add 2.5

// remove 
arr.splice(2,2) // start from 2 , remove 2, add nothing

console.log("🚀 ~ arr:", arr);

// fun() => [1,2,3,4,5] => 

*/

/*
// indexof/lastIndexOf : give the index of given element
let arr = [1, 2, 3, 4, 5, 3];

let index = arr.indexOf(3); // check from starting and return give first matching element's index, if not avilable return -1
let lastIndex = arr.lastIndexOf(3); // check from ending and return give first matching element's index, if not avilable return -1
console.log("🚀 ~ lastIndex:", lastIndex)
console.log("🚀 ~ index:", index);
*/

/*

TASK
//use index of and last index of and check there is a copy elemenet avilable in array or not

let arr = [1, 2, 3, 4, 5, 3];
let element = 3
// function(arr,element) // return the message => 3 is available more then 1 time
let element = 2
// function(arr,element) // return the message => 2 is available only 1 time

*/

/*
// reverse() – reverses the existing array and also return new reverce array
let arr = [1, 2, 3, 4, 5];

let reverceArray = arr.reverse()
console.log("🚀 ~ arr:", arr)
console.log("🚀 ~ reverceArray:", reverceArray)
*/

// indexOf and findIndex me diffrenec kya he
// aaj ka jo bhi padha vo

/*
// sort => shorting the array

let arr = [4, 1, 5, 2, 6, 3,0.5,-1];
arr.sort();
console.log("🚀 ~ arr:", arr);
*/

/*
// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7,8];

let mergeArr = arr.concat(arr2,arr3,100)
console.log("🚀 ~ mergeArr:", mergeArr)
*/

/*
// includes(value) – returns true if the array has value, otherwise false

let arr = [1, 2, 3];
let availabllity = arr.includes(20)
console.log("🚀 ~ availabllity:", availabllity)
*/

/*
// join – convert array to string.

let arr = [1, 2, 3];
// let join = arr.join() // 1,2,3
// let join = arr.join("") // 1--2--3
let join = arr.join(""); // 123
console.log("🚀 ~ join:", join);
*/

/*
// find(func) – find elements through the function, return first values that make it return true

let arr = [1, 2, 3, 4, 5, 3];

let matchEle = arr.find((ele, i) => {
  console.log("---ele--->", ele, i);
  //   return ele === 3;
  //   return i === 3;
  return i === 90;
});
console.log("🚀 ~ matchEle:", matchEle);

// arr.find(fun);
// fun(1)
// fun(2)
// fun(3)
// fun(4)
// fun(5)
// fun(3)


*/

/*
// findIndex is like find, but returns the index instead of a value.

let arr = [1, 2, 3, 4, 5, 3];

let matchIndex = arr.findIndex((ele, i) => {
  console.log("---ele--->", ele, i);
    return ele === 3;
//   return i === 90;
});
console.log("🚀 ~ matchIndex:", matchIndex);

*/

/*
// filter(func) – filter/find all elements through the function, return all values that make it return true

let arr = [1, 2, 3, 4, 5, 3];

let filteredValues = arr.filter((e) => {
  //   return e > 3;
  //   return e === 3;
  return e > 70;
});
console.log("🚀 ~ filteredValues:", filteredValues);
*/

/*
// forEach(func) – calls func for every element, does not return anything.

let arr = [1, 2, 3, 4, 5, 3];

arr.forEach((e) => {
  console.log("🚀 ~ e:", e);
});
console.log("🚀 ~ x:", x);
*/

/*
// map(func) – creates a new array from results of calling func for every element.

let arr = [1, 2, 3, 4, 5, 3];

let newArr = arr.map((e) => {
  console.log("🚀 ~ e:", e);
  return e + 10 ; // [ 11, 12, 13, 14, 15, 13 ]
//   return e > 3; // [ false, false, false, true, true, false ]
});
console.log("🚀 ~ arr:", arr);
console.log("🚀 ~ newArr:", newArr);

*/
let arr = [1, 2, 3, 4, 5, 3];

let value = arr.at(-2);
// console.log("🚀 ~ value:", value);


// some(): Tests whether at least one element in the array passes the test implemented by the provided function.











