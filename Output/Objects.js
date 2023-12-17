"use strict";
//* In TypeScript, objects are used to represent data with key-value pairs. Each Key in the object is a string (or a symbol in ES6) that maps to a value.
//? Let's consider a real-life example of representing a person's information using TypeScript objects.
//? Person -> name, age, isStudent, address(city, country)
const person = {
    name: "Devendra",
    age: 20,
    isStudent: true,
    address: {
        city: "Rajkot",
        country: "India"
    }
};
//Todo: Accessing the object data
// console.log(person.address.city)
//Todo: Updating object properties
person.address.city = "Ahemdabad";
console.log(person.address.city);
//! Home-Work
//? Create a Product Object:
//? Define a product with properties for name, price, and quantity. Create a product object with the following data:
// Name: "Laptop"
// Price: 10000
// Quantity: 5
const Product = {
    Name: "Laptop",
    Price: 10000,
    Quantity: 5
};
