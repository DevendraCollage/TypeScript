// **************************************
//* Inheritance in TS
// **************************************

// * Inheritance allows a class to reuse the functionality of an existing class without rewriting it.
//? Inheritance is a mechanism in which one class acquires the property of another class. For example, a child inherits the traits of his/her parents.

//! Define Class
class PersonsData {
    name:string;
    age:number;
    hobbies:string[]; //! This is an array of an string

    constructor(name:string,age:number,hobbies:string[]){ //! Constructor of the class
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    //! Define function
    introduce(): string {
        return `Hi, I am ${this.name} and I am ${this.age} year old. I love ${this.hobbies.join(",")}`
    }
}

class Student extends PersonsData {
    grade: number;

    constructor(name:string,age:number,hobbies:string[],grade:number){
        super(name,age,hobbies); //! Access the properties of parent class
        this.grade = grade;
    }

     //! Define function
     introduce(): string {
        // return `Hi, I am ${this.name} and I am ${this.age} year old. I love ${this.hobbies.join(",")} and I am in class ${this.grade}` //? Type-1
        return `${super.introduce()}. I am in class ${this.grade}` //? Type-2
    }
}

//! Create Object of an Class
const personsData1:Student = new Student("Dev",22,["Cricket","Reading","Programming","Learn New Things"],12); //? Object-1 and Assign data into the Constructor
console.log(personsData1.introduce());

const personsData2:Student = new Student("Divine",22,["Cricket","Reading","Programming","Learn New Things"],12); //? Object-2 and Assign data into the Constructor
console.log(personsData2.introduce());

