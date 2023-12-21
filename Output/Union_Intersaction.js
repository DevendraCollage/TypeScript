"use strict";
//? Union types allows you to specify that a variable can hold values of multiple types. You use the | (pipe) symbol to define a union type in.
//* In TypeScript, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties. Failure to do so will result in a type error during compilation.
const inputValue = (value) => { };
inputValue(25);
inputValue("Hello world");
inputValue(true);
//* Practice, we'll create a function that can accept different types of arguments and perform different actions based on the ype of the input. suppose we want to create a function that doubles the value if the input is a number, or converts the input to uppercase if it's a string. To achieve this, we can use a union type fo allow the function toa accept both numbers and strings.
// Define Function
const userInput = (value) => {
    if (typeof value === "number") {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        throw new Error("Invalid input data");
    }
};
// Function call
console.log(userInput(10));
console.log(userInput("India"));
const employee = {
    name: "John Doe",
    age: 34,
    emp_id: 987654321,
    department: "IT"
};
const myPersonalInfo = {
    name: "Devendra",
    age: 28,
};
const user = { name: "Devendra", age: 22 };
const myLoc = { city: "Rajkot", country: "India" };
// Define function
const createUserProfile = (user, myLoc) => {
    return { ...user, ...myLoc };
};
// Call function
const myCompleteInfo = createUserProfile(user, myLoc);
console.log(myCompleteInfo);
//! Home-Work for Intersection
//? Account: Contains details about the user's account, with the following properties:
// accountId (number): The account's unique identifier.
// accountType (string): The type of the account (e.g., "Savings", "Checking", etc..).
// balance (number): The account balance.
//* task is to create a function called combineUserAnd Account that takes a User object and an Account object as arguments and returns a new object representing the combined information of the user and their account.
// Ensure that the resulting oject contains all the properties from both User and Account types.
