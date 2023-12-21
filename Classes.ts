// ******************************************************
//* How to crate a class and also instance of class in TS
// ******************************************************


//* A class in terms of OOP is a blueprint for creating objects.
//* A class is like a blueprint for creating similar things.
//* A Object is an instance of an class.


//? In TypeScript, there is a convention to use PascalCase (also known as UpperCase) for class names. This means that class names should start with a capital letter and each subsequent word in the class name should also being with a capital letter.

//! Define Class
class PersonData {
    name:string;
    age:number;
    hobbies:string[]; //! This is an array of an string

    constructor(name:string,age:number,hobbies:string[]){ //! Constructor of the class
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}

//! Create Object of an Class
const personData1:PersonData = new PersonData("Dev",22,["Cricket","Reading","Programming","Learn New Things"]); //? Object-1 and Assign data into the Constructor
console.log(personData1);

const personData2:PersonData = new PersonData("Divine",22,["Cricket","Reading","Programming","Learn New Things"]); //? Object-2 and Assign data into the Constructor
console.log(personData2);