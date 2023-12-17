"use strict";
//* In TypeScript, a type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. Type aliases provide better readability, organization, and abstraction of complex types.
const person1 = {
    name: "Divine",
    age: 21,
    isStudent: true,
    address: {
        city: "Delhi",
        country: "India"
    }
};
const person2 = {
    name: "Divine",
    age: 21,
    isStudent: true,
    address: {
        city: "Pune",
        country: "India"
    }
};
const products = {
    Name: "Laptop",
    Price: 1000,
    Quantity: 5
};
//! Calculate Total Price:
//? Given the products object from the previous questions, write a functions called calculateTotalPrice that calculates and returns the total price (price * quantity) of the product.
const calculateTotalPrice = (products) => {
    return products.Price * products.Quantity;
};
console.log(calculateTotalPrice(products));
