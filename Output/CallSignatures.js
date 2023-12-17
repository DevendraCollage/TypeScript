"use strict";
//* The function call signature refers to the declaration of definition of a function, which includes the function's name, parameters, and return type. It defines the structure and type information of a function without including the function's implementations or body.
const student1 = {
    name: "Devendra",
    age: 21,
    greet: (country) => `Welcome my name is ${student1.name}, I am ${student1.age} year old and I am from ${country}`
};
console.log(student1.greet('India'));
