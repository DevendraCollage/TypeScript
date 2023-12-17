//! Array in TS

//? In TypeScript, you can create and initialize arrays using various approaches.

// a) Using square brackets:

// let numbers:number[] = [1,2,3,4,5]

// b) Using the Array constructor:

// const number1:number[] = new Array(1,2,3,4,5);

// c) Using the Array.of method:

const names = Array.of("Devendra","Parmar")

// Operation: Accessing elements using index:
//? You can access array individual elements of an array using square brackets notation with the index of the elements. Remember that array indices start from 0.

console.log(names[0]);
console.log(names.length);