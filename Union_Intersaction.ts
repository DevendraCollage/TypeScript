//? Union types allows you to specify that a variable can hold values of multiple types. You use the | (pipe) symbol to define a union type in.
//* In TypeScript, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties. Failure to do so will result in a type error during compilation.

const inputValue = (value:string | number | boolean) => {}

inputValue(25)
inputValue("Hello world")
inputValue(true)

//* Practice, we'll create a function that can accept different types of arguments and perform different actions based on the ype of the input. suppose we want to create a function that doubles the value if the input is a number, or converts the input to uppercase if it's a string. To achieve this, we can use a union type fo allow the function toa accept both numbers and strings.

// Define Function
const userInput = (value:string | number): string | number => {
    if (typeof value === "number") {
        return value * 2;
    }else if (typeof value === "string") {
        return value.toUpperCase();
    }else{
        throw new Error ("Invalid input data");
    }
}

// Function call
console.log(userInput(10));
console.log(userInput("India"));

//! Home-Work For Union
//? we want to create a functions that formats the value passed to it in a specific way based on its type:
//? If the input is a number, it should add a dollar sign and format it with two decimal places.
//? If the input is a boolean, it should return "Yes" for true and "No" for false.
//? If the input is a string, it should capitalize the first letter.


//! Intersection types allow you to combine multiple types into a single type. You use the & (ampersand) symbol to define an intersection type.

type Persons = {
    name:string;
    age:number;
}

type Employee = {
    emp_id: number;
    department:string
}

type EmployeeDetails = Persons & Employee;

const employee:EmployeeDetails = { // You can noy apply only one because of Intersection
    name:"John Doe",
    age:34,
    emp_id:987654321,
    department:"IT"
}

const myPersonalInfo: Persons = {
    name: "Devendra",
    age: 28,
}

//* Practice: Create user Profile
//* You are given two TypeScript types: User and MyLocation. The User type represents basic user information, while the MyLocation type contains details about the user's location. Create a function called createUserProfile that takes a User object and a MyLocation object as arguments and prints the user's name and the city they are from.

type User = {
    name: string;
    age: number;
}

type MyLocation = {
    city: string;
    country: string;
}

const user:User ={name:"Devendra",age:22}
const myLoc:MyLocation = {city:"Rajkot",country:"India"}

// Define function
const createUserProfile = (user:User,myLoc:MyLocation) => {
    return {...user,...myLoc}
}

// Call function
const myCompleteInfo : User & MyLocation = createUserProfile(user,myLoc)
console.log(myCompleteInfo)

//! Home-Work for Intersection
//? Account: Contains details about the user's account, with the following properties:
// accountId (number): The account's unique identifier.
// accountType (string): The type of the account (e.g., "Savings", "Checking", etc..).
// balance (number): The account balance.

//* task is to create a function called combineUserAnd Account that takes a User object and an Account object as arguments and returns a new object representing the combined information of the user and their account.

// Ensure that the resulting oject contains all the properties from both User and Account types.