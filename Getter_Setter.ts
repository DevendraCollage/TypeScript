//* *********************************
//* GETTER & SETTER
//* *********************************

//? In TypeScript classes, you can getter and setter methods to control the access and modification of class properties. Getter methods allow you to retrieve the value of a property, while setter methods allow you to set the value of a property with additional logic and validation.

//todo: The get method doesn't take any parameters, and the set method takes only one parameter.

class Persons1 {
    private _age: number | undefined;
    constructor(public name: string, protected hobbies: string[]){} //? You can define the constructor and your property of the class. You can not explicitly define the property of tha class. 

    //todo: Define Setter - To set the age
    public set age(age:number){ //? Need the parameter to set the age
        if (age > 150 || age < 0) {
            throw new Error("Age is not valid!");
        }
        this._age = age;
    }

    //todo: Define Getter - To get the details and print them
    public get age() { //? No need of parameter to get age
        if (this._age === undefined) {
            throw new Error ("Age is not define");
        }
        return this._age;
    }

    //todo: Define method
    IntroduceParent() : string {
        return `Hi, I am ${this.name} and I am ${this.age} years old. I love ${this.hobbies.join(",")}`;
    }
}

//! Create object of the class
const  Per1:Persons1 = new Persons1("Devendra",["Cricket","Reading","Programming"]);

Per1.age = 12;

console.log(Per1.IntroduceParent());
console.log(Per1.age);

//* PRACTICE QUESTIONS
//? Q1: Bank Account Balance
//* Create a TypeScript class BankAccount with a private property _balance initialized to 0.
//* Implement a getter method balance that returns the current balance.
//* Implement a setter method balance that updates the balance if the value is non-negative. Otherwise, log an error message.
//* Instantiate an object of the BankAccount class.
//* Use the setter to set the balance 1000 and use the getter to display the updates balance.
//* Try setting a negative balance using the setter. What output do you expect?

class BankAccount {
    private _balance: number = 0;

    //todo: Setter method
    public set balance(amount:number){
        if (amount < 0) {
            throw new Error("Amount is not Valid!");
        }
        this._balance = this._balance + amount;
    }

    //todo: Getter Method - Return the current balance
    public get balance():number{
        if (this._balance === undefined) {
            throw new Error("Value is not define");
        }
        return this._balance;
    }
}

//! Create object of the class
const bank:BankAccount = new BankAccount();

bank.balance = -2000;
console.log(`The updated balance is ${bank.balance}`);

//? Q2: Temperature Converter
//* Define a TypeScript class Temperature with a private property _celsius set to 0.
//* Implement a getter method celsius that returns the temperature in Celsius.
//* Implement a setter method celsius that sets the temperature in Celsius.
//* Implement a getter method fahrenheit that converts Celsius to fahrenheit using the formula (C * 9/5) + 32.
//* Implement a setter method fahrenheit that converts Fahrenheit to Celsius using the formula (F - 32) * 5/9.
//* Create an instance of the Temperature class.
//* Use the setter to set the temperature in Celsius to 25 and then use the getter for Fahrenheit. What Fahrenheit value do you except?
//* Use the setter to set the temperature in Fahrenheit to 98.6 and then use the getter for celsius. What Celsius value do you except?

class Temperature {
    private _celsius:number = 0;

    //todo: Setter method - Set the temperature in celsius
    public set celsius(temp:number) {
        this._celsius = temp;
    }

    //todo: Getter method  - Returns the temperature in celsius
    public get celsius():number {
        return this._celsius;
    }

    //todo: Setter method - Convert the temperature in Fahrenheit to Celsius
    public set fahrenheitTemp(temp1:number){
        const value : number = (temp1 - 32)*5/9;
        this.celsius = Math.round(value);
    }

    //todo: Getter method - Convert the temperature in Celsius to Fahrenheit
    public get celsiusTemp(){
        return `${Math.round((this.celsius * 9/5) + 32)}F`;
    }
}

//! Create object of the class
let convertTemperature:Temperature = new Temperature();
convertTemperature.celsius=35;
console.log("Temperature in Fahrenheit: " + convertTemperature.celsiusTemp);
convertTemperature.celsius=98;
console.log("Temperature in Celsius: " + convertTemperature.fahrenheitTemp);