"use strict";
// ******************************************
//* STATIC PROPERTIES & METHODS
// ******************************************
//* In TypeScript, static methods and properties belong to the class itself rather than to instance of the class. By making methods and properties static, we can access them directly from the class without needing to instance-specific data.
class Example {
    static PI = Math.PI; //? Apply Any Properties Static you don't need too create instance of the class
}
//! Simple Use The Property using className no need to create instance of the class
console.log(Example.PI);
//? Example: Math Operation Utility - creating a utility class to perform various mathematical operations.
class Mathematical {
    //! Addition
    static add(num1, num2) {
        return num1 + num2;
    }
    //! Subtraction
    static sub(num1, num2) {
        return num1 - num2;
    }
    //! Multiplication
    static mul(num1, num2) {
        return num1 * num2;
    }
    //! Division
    static div(num1, num2) {
        return num1 - num2;
    }
    //! Modules
    static mod(num1, num2) {
        return num1 % num2;
    }
}
console.log(Mathematical.add(10, 20)); //? Output: 30
console.log(Mathematical.sub(20, 5)); //? Output: 15
console.log(Mathematical.mul(10, 3)); //? Output: 30
console.log(Mathematical.div(10, 5)); //? Output: 5
console.log(Mathematical.mod(10, 2)); //? Output: 0
