"use strict";
//! Questions related to Type Inference
// ! Home Work
//? Question-1 Declare a variable and initialize it with the value "Hello, TypeScript!". Infer the type of message using type inference.
let message = "Hello, TypeScript!"; // Type Inference is String
console.log(message);
//? Question-2 Write a function calculateArea that takes the length and width parameters of type number and returns their product. Infer the return type of the function using type inference.
// Function Declaration
let calculateArea = (num1, num2) => {
    return num1 * num2;
};
// Function Call
console.log(calculateArea(10, 20));
