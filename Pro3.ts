//todo: Write a TypeScript program that declares variables of the following data types: number, string, boolean, and undefined. Assign values to them and perform basic operations.

//! Declare variables
let VarNumber = 20;
let VarString = "Hello, TypeScript!"
let VarBoolean = true;
let VarUndefined = undefined;

//! Perform basic operations
const Perform1 = VarNumber + VarString;
console.log(Perform1); //? Output: 20Hello, TypeScript!

//! Addition
VarNumber = VarNumber + 5;
console.log(VarNumber); //? Output: 25

//! String Concatenation
VarString = VarString + "I Am Still Learning!";
console.log(VarString); //? Output: Hello, TypeScript! I Am Still Learning!

//! Logical Operation
if (VarBoolean == true || false) {
    console.log("True");
}else{
    console.log("False");
}

//! Check is undefined
if (VarUndefined === undefined) {
    console.log("VarUndefine is undefined!");
}else{
    console.log("VarUndefine is not undefined.");
}