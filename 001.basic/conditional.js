/**
 * if
 * if else
 * if else if else
 * switch case
 */

/*
let age = 18;
if (age > 18) {s
  console.log("You are eligible for voting");
}else{
    console.log("You are not eligible for voting");
}

*/

/*
let age = "true";

if (age < 18) {
  console.log("You are minor");
} else if (age < 60) {
  console.log("You are adult");
} else if (age >= 60) {
  console.log("You are senior citizen");
} else if (age > 80) {
  console.log("You are super senior citizen");
} else {
  console.log("Invalid age");
}
*/

/*
let marks = 65;

if (marks < 36) {
  console.log("you are failed");
}
if (marks < 60) {
  console.log("you are average");
}
if (marks < 70) {
  console.log("You are above average");
}
if (marks < 80) {
  console.log("You are above average plus");
}
*/

// let age = 25;
// switch (age) {
//   case age > 10:
//     console.log("You are minor");
//     break;
//   case age > 20:
//     console.log("You are above 20");
//     break;
// }

let age = 20;
switch (age) {
  case age <= 18 && age <= 25: // true
    console.log("You' age between 18 to 25");
    break;
  case age >= 26 && age <= 40: //f
    console.log("You' age  between 26 to 40");
    break;
  default:
    console.log("Your age is above 40");
}

// ternary operator

let weight = 9;

// condition ? t : f

// const color = weight > 10 ? "red" : "white"
// console.log("🚀 ~ color:", color)

// weight > 9 ? console.log("weight") : console.log("red");

function fun1() {
  console.log("----fun1----");
}
function fun2() {
  console.log("----fun2----");
}

const call = "fun4";

call === "fun1" ? fun1() : fun2();
