"use strict";
//?                / Parent Class / Child Class / Outside Class /
//todo             / ------------ / ----------- / ------------- / 
//?         Public / ✅           / ✅         / ✅            /
//?      Protected / ✅           / ✅         / ❌            / 
//?        Private / ✅           / ❌         / ❌            / 
//! Define Class - Parent
class PerData {
    name;
    age;
    hobbies; //! This is an array of an string
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    //! Define function
    introduce() {
        return `Hi, I am ${this.name} and I am ${this.age} year old. I love ${this.hobbies.join(",")}`;
    }
}
//! Child Class
class Students extends PerData {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies); //! Access the properties of parent class
        this.grade = grade;
    }
    //! Define function
    introduce() {
        // return `Hi, I am ${this.name} and I am ${this.age} year old. I love ${this.hobbies.join(",")} and I am in class ${this.grade}` //? Type-1 and In this you can not access the hobbies because of the access modifiers
        return `${super.introduce()}. I am in class ${this.grade}`; //? Type-2
    }
}
//! Create Object of an Class
const PerData1 = new Students("Dev", 22, ["Cricket", "Reading", "Programming", "Learn New Things"], 12); //? Object-1 and Assign data into the Constructor
console.log(PerData1.introduce());
const PerData2 = new Students("Divine", 22, ["Cricket", "Reading", "Programming", "Learn New Things"], 12); //? Object-2 and Assign data into the Constructor
console.log(PerData2.introduce());
