"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    // class parameters
    #id;
    name;
    city;
    // constructor (Instance)   
    constructor(id, name, city) {
        this.#id = id;
        this.name = name;
        this.city = city;
    }
    // function
    getDetail() {
        return `${this.name} stays at ${this.city}`;
    }
}
let john = new Employee(102, "John", "Paris");
// This value override the with function parameters
// john.id = 101; // You can-not access or assign the value because of access privileges
john.name = "John";
john.city = "Canada";
console.log(john);
console.log(john.getDetail());
