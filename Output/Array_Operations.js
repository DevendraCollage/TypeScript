"use strict";
//* Arrays in TypeScript come with built-in methods that allow you to perform common operations
const fruits = ["apple", "banana", "orange", "mango", "watermelon"];
// a) Adding elements to an array using push:
fruits.push("kiwi");
console.log(fruits);
// b) Removing elements from an array using pop:
fruits.pop();
//! Iterating over elements:
//? You can iterate over the elements of an array using various looping constructs such as for, for..of, or array methods like forEach.
// Using for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Using for .. of loop
for (const iterator of fruits) {
    console.log(iterator);
}
// Using forEach method
fruits.forEach((element) => console.log(Element));
