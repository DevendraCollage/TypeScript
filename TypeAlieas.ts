//* In TypeScript, a type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type, making it easier to reuse and refer to the same type in different parts of your code. Type aliases provide better readability, organization, and abstraction of complex types.

//* To define a type alias, you use the type Keyword followed by the alias name and the type definition.

type Person = {
    name:string;
    age:number;
    isStudent:boolean;
    address:{
        city:string;
        country:string;
    }
}

const person1:Person = {
    name:"Divine",
    age:21,
    isStudent:true,
    address:{
        city:"Delhi",
        country:"India"
    }
}

const person2:Person = {
    name:"Divine",
    age:21,
    isStudent:true,
    address:{
        city:"Pune",
        country:"India"
    }
}

//? Create a Product Object:
//? Define a product with properties for name, price, and quantity. Create a product object with the following data:
// Name: "Laptop"
// Price: 10000
// Quantity: 5

type Products = {
    Name:string;
    Price:number;
    Quantity:number;
}

const products:Products = {
    Name:"Laptop",
    Price:1000,
    Quantity:5
}

//! Calculate Total Price:
//? Given the products object from the previous questions, write a functions called calculateTotalPrice that calculates and returns the total price (price * quantity) of the product.

const calculateTotalPrice = (products:Products) => {
    return products.Price * products.Quantity;
}
console.log(calculateTotalPrice(products));