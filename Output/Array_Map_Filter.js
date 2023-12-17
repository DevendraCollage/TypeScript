"use strict";
//* Map & Filter Method in Array in TS
const numbers = [1, 2, 3, 4, 5];
//! Map Method
//* The map method creates a new array by applying a provided function to each element of the original array. It transforms each element and returns a new array with the transformed values.
//? 1: Doubling each number
// const doubleData:number[] = numbers.map((curVal:number) => curVal * 2)
// console.log(doubleData);
//? 2: Converting numbers to strings
const stringNumbers = numbers.map((num) => num.toString());
console.log(stringNumbers);
//! Filter Method
//? 1: Filtering even numbers
const EvenNum = numbers.filter((curElm) => curElm % 2 == 0);
console.log(EvenNum);
//? 2: Filtering numbers greater than 3
const GreaterNumb = numbers.filter((curElem) => curElem > 3);
console.log(GreaterNumb);
//* Home-Work Question for map:
//? 1: Given an array of strings representing names, create a new array that contains the uppercase version of each name.
const Names = ["Alice", "Bob", "Anna", "Anderson", "Alex"];
const Names2 = Names.toString().toUpperCase().split(",");
console.log(Names);
console.log(Names2);
//? 2: Given an array of numbers, create a new array that contains the square of each number.
const Num1 = [1, 2, 3, 4, 5];
const Num2 = Num1.map((curVal) => curVal * 2);
console.log(Num1);
console.log(Num2);
//* Home-Work Question for filter:
//? 1: Given an array of strings, create a new array that contains only the strings with a length greater than 15.
function filterStringsByLength(arr) {
    return arr.filter((str) => str.length > 15);
}
const inputArray = ["short", "medium length but have na 15 characters", "this string is longer than 15 characters"];
const resultArray = filterStringsByLength(inputArray);
console.log(resultArray);
//? 2: GIven an array of strings, filter our the names the with the letter "A".
const Names3 = ["Alice", "Bob", "Anna", "Anderson", "Alex"];
const NamesWithA = Names3.filter((name) => name.includes("A"));
console.log(NamesWithA);
