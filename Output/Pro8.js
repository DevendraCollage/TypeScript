"use strict";
//todo: Write a TypeScript program that declares an array of a specific data type. It will demonstrates common array operations like adding elements, removing elements, and iterating through the array.
//! Declare Array
let CountryName = ["India", "Bhutan", "Nepal"];
//! Adding Elements 
CountryName.push("SriLanka");
console.log(CountryName); //? Output :  [ 'India', 'Bhutan', 'Nepal', 'SriLanka'
//! Removing Elements
CountryName.pop(); //? This will remove last elements of the array
console.log(CountryName); // ? Output: [ 'India', 'Bhutan', 'Nepal']
//! Iterating Elements
for (var i = 0; i < CountryName.length; i++) {
    console.log(i);
}
