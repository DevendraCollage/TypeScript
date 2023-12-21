"use strict";
//* Generics in TypeScript allow you to create reusable component or functions that can work with multiple data types.
// function logAndReturn(value: string | number): number | string {
//     console.log(value);
//     return value;
// }
// const numberResult = logAndReturn(42);
// const stringResult = logAndReturn("Hello Generics!");
// console.log(numberResult);
// console.log(stringResult);
// Generic function to log and return an input value 
function logAndReturn(value) {
    return value;
}
// Using the generic function with different types
const numberResult = logAndReturn(42); //? Then this will type inference automatically
const stringResult = logAndReturn("Hello Generics!"); //? Then this will type inference automatically
console.log(numberResult);
console.log(stringResult);
//! Home-Work
//! Here is the function overloading example?
// function add(a:number, b:number): number;
// function add(a:string, b:string): string;
// function add(a:any, b:any): any {
//     return a + b;
// }
// const result1 = add(5,10);
// console.log(result1); //? Output: 15
// const result2 = add("Hello","World");
// console.log(result2); //? Output: HelloWorld 
//! You need to code the same using the Generics types.
function add(a) {
    return a;
}
const result1 = add(10 + 20);
console.log(result1); //? Output: 30
const result2 = add("Hello" + "World");
console.log(result2); //? Output: HelloWorld
