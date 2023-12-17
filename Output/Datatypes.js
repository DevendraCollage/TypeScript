"use strict";
let fname = "Devendra"; // String 
let age = 22; // Number
let bool = true; // Boolean
let marks = [21, 22, 54, 95]; // Array
// You can declare array also like this
// Type-1
let stud_marks;
stud_marks = ["21", "54"];
// Type-2 (Generics)
let stu_marks;
stu_marks = [54, 65, 85];
// Tuples
let swapNumbers;
function swapnumbers(num1, num2) {
    return [num2, num1];
}
swapnumbers(10, 20);
let dept; // You can store any data-type of value to the variable // You cannot compulsory to define the type any to the variable will also work
dept = 10;
dept = "One";
function add(num1, num2) {
    num1 + num2;
}
console.log(10, 5);
const sub = (num1, num2) => num1 - num2; // (Type-2 - Arrow function)
console.log(sub(20, 10));
