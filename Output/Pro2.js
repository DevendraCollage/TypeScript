"use strict";
//todo: Write a TypeScript program that declares variables using let, const, and var. Then, describe how each declaration type behaves with respect to scoping and mutability.
//! Declare variables using let, var, and const
let word1 = "Hello1"; //* This is block-scoped variable
var word2 = "Hello2"; //* This is a global-scoped variable
const word3 = "Hello3"; //* This is a block-scoped constant variable
//! Print values 
console.log(word1); //? Output: Hello1
console.log(word2); //? Output: Hello2
console.log(word3); //? Output: Hello3
