//* Abstract classes provide a way to define common properties and methods that multiple derived classes can share. This promoted code reuse and helps establish a
//* Abstract class cannot be instantiated

//* abstract classes focus on class inheritance and sharing common functionality,
//* whereas the useContext hook in React focuses on managing global state and allowing components to consume that state.

//? Example: Shape Hierarchy
//? Suppose you're building a graphics application, and you want to create a hierarchy of different shapes. You can use an abstract class Shape to define common properties and methods that all shapes share.

abstract class Shape {
    abstract calculateArea():number;
    abstract displayArea():void;
    constructor(protected color:string){}
}

class Circle extends Shape {
    constructor(protected color:string,protected radius:number){
        super(color);
    }
    public calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    public displayArea(): void {
        console.log(`The Area of Circle is : ${this.radius}`);
    }
}

class Rectangles extends Shape {
    constructor(protected color:string,protected height:number, protected width:number){
        super(color);
    }
    public calculateArea(): number {
        return this.height * this.width;
    }
    public displayArea(): void {
        console.log(`The Area of Rectangle is : ${this.height} `);
    }
}

//! Instance of the child class
const circle = new Circle("Red",10);
console.log(circle.calculateArea());
circle.displayArea;


//* Practice Time
//? You need to do the same for Square and Rectangle and if possible use getter and setter methods or static members

abstract class Shapes {
    abstract calculateArea():number;
    abstract displayArea():string;
    constructor(color:string){}
}

class Square extends Shapes {
    private _height = 0;
    private _width = 0;
    private _depth = 0;
    private _area = 0;

    constructor(color:string,height:number,width:number,depth:number){
        super(color);
        this._height = height;
        this._width = width;
        this._depth = depth;
    }

    get height() : number {
        return this.height;
    }

    set height(value:number) {
        this._height = value;
    }

    get width() : number {
        return this._width;
    }

    set width(value:number){
        this._width = value;
    }

    get depth() : number {
        return this._depth;
    }

    set depth(value:number){
        this._depth = value;
    }

    public calculateArea(): number {
        this._area = this._height * this._width * this._depth;
        return this._area;
    }

    public displayArea(): string {
        return `The Area of Square is: ${this._area}`;
    }
}

//! Example usage
const square = new Square("Red",2,3,4);
console.log(square.calculateArea(),square.displayArea()); //? Output: 24 The Area of Square is : 24

class Rectangle extends Shapes {
    private _height = 0;
    private _width = 0;
    private _area = 0;

    constructor(color:string,height:number,width:number){
        super(color);
        this._height = height;
        this._width = width;
    }

    get height() : number {
        return this.height;
    }

    set height(value:number) {
        this._height = value;
    }

    get width() : number {
        return this._width;
    }

    set width(value:number){
        this._width = value;
    }

    public calculateArea(): number {
        this._area = this._height * this._width ;
        return this._area;
    }

    public displayArea(): string {
        return `The Area of Rectangle is: ${this._area}`;
    }
}

//! Example usage
const rectangle = new Rectangle("Red",2,30);
console.log(rectangle.calculateArea(),rectangle.displayArea()); //? Output: 60 The Area of Rectangle is : 60