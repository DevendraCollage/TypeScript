"use strict";
//* Abstract classes provide a way to define common properties and methods that multiple derived classes can share. This promoted code reuse and helps establish a
//* Abstract class cannot be instantiated
//* abstract classes focus on class inheritance and sharing common functionality,
//* whereas the useContext hook in React focuses on managing global state and allowing components to consume that state.
//? Example: Shape Hierarchy
//? Suppose you're building a graphics application, and you want to create a hierarchy of different shapes. You can use an abstract class Shape to define common properties and methods that all shapes share.
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea() {
        console.log(`The Area of Circle is : ${this.radius}`);
    }
}
class Rectangles extends Shape {
    color;
    height;
    width;
    constructor(color, height, width) {
        super(color);
        this.color = color;
        this.height = height;
        this.width = width;
    }
    calculateArea() {
        return this.height * this.width;
    }
    displayArea() {
        console.log(`The Area of Rectangle is : ${this.height} `);
    }
}
//! Instance of the child class
const circle = new Circle("Red", 10);
console.log(circle.calculateArea());
circle.displayArea;
//* Practice Time
//? You need to do the same for Square and Rectangle and if possible use getter and setter methods or static members
class Shapes {
    constructor(color) { }
}
class Square extends Shapes {
    _height = 0;
    _width = 0;
    _depth = 0;
    _area = 0;
    constructor(color, height, width, depth) {
        super(color);
        this._height = height;
        this._width = width;
        this._depth = depth;
    }
    get height() {
        return this.height;
    }
    set height(value) {
        this._height = value;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get depth() {
        return this._depth;
    }
    set depth(value) {
        this._depth = value;
    }
    calculateArea() {
        this._area = this._height * this._width * this._depth;
        return this._area;
    }
    displayArea() {
        return `The Area of Square is: ${this._area}`;
    }
}
//! Example usage
const square = new Square("Red", 2, 3, 4);
console.log(square.calculateArea(), square.displayArea()); //? Output: 24 The Area of Square is : 24
class Rectangle extends Shapes {
    _height = 0;
    _width = 0;
    _area = 0;
    constructor(color, height, width) {
        super(color);
        this._height = height;
        this._width = width;
    }
    get height() {
        return this.height;
    }
    set height(value) {
        this._height = value;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    calculateArea() {
        this._area = this._height * this._width;
        return this._area;
    }
    displayArea() {
        return `The Area of Rectangle is: ${this._area}`;
    }
}
//! Example usage
const rectangle = new Rectangle("Red", 2, 30);
console.log(rectangle.calculateArea(), rectangle.displayArea()); //? Output: 60 The Area of Rectangle is : 60
