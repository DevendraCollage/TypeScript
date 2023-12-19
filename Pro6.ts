//todo: Write a TypeScrip program that converts a variable of one type to another using type assertions and type conversion functions like parseInt().

//! Declare variables
//! Conversion using parseInt()
let a = "10";
let b = Number.parseInt(a); 

//! Output
console.log(typeof(a)); //? Output: string
console.log(typeof(b)); //? Output: number

//! Conversion using type assertions
let c = 10;
let d = c as number; //? Type-1
let e = <number>c; //? Type-2
