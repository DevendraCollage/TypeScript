"use strict";
//todo: Explaining the shorthand properties.
class Person1 {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    } //? You can define the constructor and your property of the class. You can not explicitly define the property of tha class. 
    //! Define method
    IntroduceParent() {
        return `Hi, I am ${this.name} and I am ${this.age} years old. I love ${this.hobbies.join(",")}`;
    }
}
//* Class Inheritance
class Students1 extends Person1 {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    //! Define method
    Introduce() {
        return this.hobbies;
    }
}
const per1 = new Person1("Devendra", 22, ["Cricket", "Reading", "Programming"]);
//! Method call (IntroduceParent)
console.log(per1.IntroduceParent());
const MCAStudents = new Students1("Devendra", 22, ["Coding", "Cricket", "Reading"], 10);
//! Method call (Introduce)
console.log(MCAStudents.Introduce());
