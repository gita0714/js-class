/**
 * reassign - Can value change
 * redeclier - can make 2 variable with same name
 * scope - use/make 2 variable in same {}
 * hoisting -  use before declieration
 * intial value - need to give intial value
 * 
 **/

// ----------------------------------- VAR --------------------------------------

// reassign -> yes
/*
var x = 10
console.log("🚀 ~ x:->first", x)

x = 30
console.log("🚀 ~ x:->second", x) 
 */

// ========================================

// redeclier -> yes
/*
var x = 10
console.log("🚀 ~ x:", x)
var x = 300
console.log("🚀 ~ x:", x)
*/

// ========================================

// scope -> global
/*
var x = 200
{
    var x = 100;
}
console.log("🚀 ~ x:", x);
*/

// ========================================

//  hoisting - yes

/*
console.log("🚀 ~ x:", x)
var x = 100
*/

// ========================================

// intial value - no needed
/*
var x 
console.log("🚀 ~ x:", x)
*/


// --------------------------------- LET ----------------------------------------

// reassign -> yes

/*
let x = 20
console.log("🚀 ~ x:->first", x)
x = 300
console.log("🚀 ~ x:", x)
*/

// ========================================

// redeclier -> no

/*
let x = 20
// let x = 300 // give error,can't define variable with same name
*/

// ========================================

//  scope -> block

/*
{
  let x = 100;
  {
    console.log("🚀 ~ x:-->1", x);
    // let x = 200;
    x = 200;
    console.log("🚀 ~ x:-->2", x);
  }
}
*/

// ========================================

//  hoisting - no
/*
// console.log("🚀 ~ x:", x)  // give error,can't use before intialisation
let x = 100
*/


// ========================================

// intial value - no needed

/*
let x 
console.log("🚀 ~ x:", x)
*/



// --------------------------------- CONST ----------------------------------------

// reassign -> No

/*
const x = 20
console.log("🚀 ~ x:->first", x)
x = 300 // give error, can't reassign value
console.log("🚀 ~ x:", x)
*/

// ========================================

// redeclier -> no

/*
const x = 20
// const x = 300 // give error,can't define variable with same name
*/

// ========================================

//  scope -> block

/*
{
  const x = 100;
  {
    console.log("🚀 ~ x:-->1", x);
    // const x = 200;
    x = 200;
    console.log("🚀 ~ x:-->2", x);
  }
}
*/

// ========================================

//  hoisting - no
/*
// console.log("🚀 ~ x:", x)  // give error,can't use before intialisation
const x = 100
*/


// ========================================


// const x  // give error, need to give intial value
// console.log("🚀 ~ x:", x)


