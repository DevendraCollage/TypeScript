"use strict";
//* IMP: when we use generic and non generic type together then while calling the function we need to defined the type in a manner but with non generics we don't.
function add(a, b) {
  return a + b;
}
// const results1 = add(5,10);
// console.log(results1); //? Output: 15
// const results2 = add("Hello","World");
// console.log(results2); //? Output: HelloWorld
//! Convert the upper function into Generics
function add(a, b, c) {
  console.log(typeof a);
  console.log(typeof b);
}
const results1 = add(20);
const results2 = add("Hello World");
