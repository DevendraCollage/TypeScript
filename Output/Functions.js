"use strict";
//! Practice Question
//? Write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome (reads the same forward and backwards), and false otherwise.
// Functions Declaration
// const isPalindrome = (palin:string):boolean => {
//     let myPalin = palin.split("").reverse().join("");
//     return myPalin === palin;
// }
// Functions Call
// console.log(isPalindrome("252"));   
//! Home-Work
//? Question-1 Create a function called calculateAverage that takes an array of number as a parameters and returns the average of those numbers.
// Function Declaration
// function calculateAverage(array:number[]){
//     const sum = array.reduce((acc, val) => acc + val);
//     return sum / array.length;
// }
// Function Call
// console.log(calculateAverage([10,20,50,40]));   
//? Question-2 Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.
// Function Declaration
function findMaxValue(array) {
    if (!Array.isArray(array))
        throw new Error('Input should be an Array');
    else {
        let maxVal = array[0];
        for (let i = 1; i < array.length; i++) {
            if (maxVal < array[i])
                maxVal = array[i];
        }
        return maxVal;
    }
}
// Function Call
console.log(findMaxValue([10, 12, 50, 20]));
