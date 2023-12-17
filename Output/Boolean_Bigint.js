"use strict";
// todo: Homework
// ? Write a TypeScript function called isDivisibleby4and8 that takes a number as a paramater and returns true if the number is divisible by both 4 and 8.
function isDivisibleby4and8(num) {
    if (num / 4 || num / 8) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isDivisibleby4and8(12));
