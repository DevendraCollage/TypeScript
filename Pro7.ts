//todo: Write a TypeScript program that creates type aliases for complex data types such as objects or custom types. Use them to define variables and explain how they improve code readability.

//! Create type alias
type Product = { //? You can reuse at any variables
    Item: string;
    Price: number;
}

const Names:Product = {
    Item:"Laptop",
    Price: 10000
}

console.log(Names.Item); //? Output: Laptop
console.log(Names.Price); //? Output: 10000