//* IMP: when we use generic and non generic type together then while calling the function we need to defined the type in a manner but with non generics we don't.

//! Function Overloading
function add(a:number, b:number): number;
function add(a:string, b:string): string;
function add(a:any, b:any): any {
    return a + b;
}

// const results1 = add(5,10);
// console.log(results1); //? Output: 15

// const results2 = add("Hello","World");
// console.log(results2); //? Output: HelloWorld

//! Convert the upper function into Generics
function add<T,U>(a:T,b:U,c:boolean){ //? You can use generics with non generics arguments
    console.log(typeof a);
    console.log(typeof b);
}

const results1 = add<number>(20);
const results2 = add<string>("Hello World");
