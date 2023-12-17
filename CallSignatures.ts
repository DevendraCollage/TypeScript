//* The function call signature refers to the declaration of definition of a function, which includes the function's name, parameters, and return type. It defines the structure and type information of a function without including the function's implementations or body.

//? Lets add one function inside the object. It's more like creating a method in object.

//? Very Important => call signature are typically inside object type notations to describe the shape of functions within object types.

type student = {
    name: string;
    age: number;
    gender?: string;
    greet: (country: string) => string // Method Call Signature
}

const student1: student = {
    name: "Devendra",
    age: 21,
    greet: (country): string => `Welcome my name is ${student1.name}, I am ${student1.age} year old and I am from ${country}`
}

console.log(student1.greet('India'));