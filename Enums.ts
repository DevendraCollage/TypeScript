//* --------------------
//* Enums in TS
//* --------------------

//? Enums in TypeScript are commonly used when you want to represent a set of related values and choose one value from multiple options. Enums provide a convenient way to define a set of named values and associate them with specific meanings.

//* In TypeScript, when constants are not explicitly assigned numeric values, they are automatically assigned increment numeric values starting from 0. The default numeric value for the first enum constant is 0, and subsequent enum constants receive values incremented by 1.

enum Roles { // This where how to define Enum
    user = "user",
    admin = "admin"
}

type Login = {
    username: string,
    password: string,
    role: Roles  // If not provided it will be undefined by default
}

const user1:Login = {
    username:"Devendra",
    password:"*8*9*9*8*9",
    role:Roles.admin
}

const user2:Login = {
    username:"John Doe",
    password:"**********",
    role:Roles.user
}

console.log(user1)
console.log(user2)