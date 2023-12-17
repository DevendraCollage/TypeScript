"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    // constructor (Instance)   
    constructor(id, name, city) {
        // class parameters
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.city = city;
    }
    // function
    getDetail() {
        return `${this.name} stays at ${this.city}`;
    }
}
_Employee_id = new WeakMap();
let john = new Employee(102, "John", "Paris");
// This value override the with function parameters
// john.id = 101; // You can-not access or assign the value because of access privileges
john.name = "John";
john.city = "Canada";
console.log(john);
console.log(john.getDetail());
