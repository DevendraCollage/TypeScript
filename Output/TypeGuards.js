"use strict";
//* A typeof guard in TypeScript lets you narrow down the type of a variable based on its runtime value. In TypeScript, type narrowing allow you to write type-safe code by ensuring you only operate on the correct type under certain circumstances. This is particularly useful with union types and generic types.
const favHobbies = (hobby) => {
  if (typeof hobby === "object" && Array.isArray(hobby)) {
    return hobby.map(() => {});
  } else {
    console.log(hobby);
  }
};
console.log("Coding"); //? This will go into else block
console.log(["Coding", "Cricket", "Reading"]); //? This will go into if block
