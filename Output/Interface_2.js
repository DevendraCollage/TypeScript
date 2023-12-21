"use strict";
//* In TypeScript, an interface is a powerful feature that allows you to define a contract for an object's shape. It specifies the properties and their types that an object must have to be considered of that particular interface type. Interfaces are primarily used for type-checking during development and do not generate any JavaScript code at runtime.
const greets = {
    name: "John",
    age: 30,
    city: 'New York'
};
const Prod = {
    Name: "Laptop",
    Price: 1000,
    Quantity: 5
};
console.log(Prod); //? Output: {Name: "Laptop", Price: 1000, Quantity: 5}
console.log(typeof (Prod)); //? Output: object
//! Calculate Total Price:
//? Given the product object from the previous question, write a function called calculateTotalPrice that calculates and returns the total price (price * quantity) of the product.
//* Function define
function calculatedTotalPrice() {
    const totalPrice = Prod.Price * Prod.Quantity;
    return `The total price of ${Prod.Name} is ${totalPrice}`;
}
//* Function call
console.log(calculatedTotalPrice()); //? Output: The total price of Laptop is 5000</s>
