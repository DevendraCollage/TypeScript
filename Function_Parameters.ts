//! Function Parameters (Default, Optional)

//? Using (?) Is For optional parameter and Define value already in function parameter is called default parameter.
// Function Declaration
const greet = (name?:string,age = 22) => {
    return `Welcome ${name} This is your age : ${age}`
}
// Function Call
console.log(greet()); 