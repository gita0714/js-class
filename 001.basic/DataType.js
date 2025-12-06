/**
 *
 * primitive data types
 *
 * number -> 0, 4.5,-5
 * string -> 'hello', "hello", `hello`
 * boolean -> true, false
 * null -> null
 * undefined -> undefined
 *
 * -----------------------------------
 *
 * non-primitive data types
 *
 * object -> {key : value} // object depends on key
 * array -> [item1, item2] -> start from 0 index // array depends on index
 *
 */

// number -> 0, 4.5,-5

// let x = 100
// let x = 100.1
// let x = -100.1

// string -> 'hello', "hello", `hello`

// let x ='bapu says "satya mev jayete" '
// let x = "urvish's"
// let x = `karamchand's son says "satya mev jayete" `

// gives error
// let x = "   hello brother,
//      i hope you are doing well
// "

// gives error
// let x = '   hello brother,
//      i hope you are doing well
// '

// let x = `   hello brother,
//      i hope you are doing well
// `

// templete literals
// let name = "bapu"

// let x = `   hello ${name},
//      i hope you are doing well
// `

// let x = 'hello ${name}, i hope you are doing well'

// Object

/*
let user = {
  name: "urvish",
  age: 26,
  isMarried: false,
  address: {
    street: "abc road",
    city: "xyz",
    code: [90, 100, 44],
  },
  hobbies: ["reading", "coding", "gaming"],
  children: null,
  phone: undefined
};


user.Name

*/

/*
let x = [
  "urvish",
  26,
  false,
  null,
  undefined,
  { street: "abc road", city: "surat" },
  ["reading", "coding", "gaming"],
];


console.log("🚀 ~ x:", x[5].city);
console.log("🚀 ~ x:", x[6][1]);

console.log("🚀 ~ x:", x[90]);
*/

/*
let number = {
  1: "one",
  2: "two",
  3: "three",
  "urvish patel" : "my name"
};
console.log("🚀 ~ number:", number[3]);
console.log("🚀 ~ number:", number["urvish patel"]);

*/



// Implicit Type Conversion

/*
let x = 10
let y = "20"

// let total = x * y  // 10 * 20  -> 200
// let total = x + y  // "10" + "20"  -> "1020"
let total = y / x  // "10" + "20"  -> "1020"

console.log("🚀 ~ total:", total)
*/

// explicit Type Conversion

let x = "1000"
// let y  = Number(x)
let y  = +x 
console.log("🚀 ~ x:", x)
console.log("🚀 ~ y:", y)
