//todo: Explaining the shorthand properties.
class Person1 {
    constructor(public name: string,public age: number, protected hobbies: string[]){} //? You can define the constructor and your property of the class. You can not explicitly define the property of tha class. 

    //! Define method
    IntroduceParent() : string {
        return `Hi, I am ${this.name} and I am ${this.age} years old. I love ${this.hobbies.join(",")}`;
    }
}

//* Class Inheritance
class Students1 extends Person1 {
    constructor(name:string, age:number, hobbies: string[], public grade:number){
        super(name,age,hobbies);
    }

    //! Define method
    Introduce() : string[] {
        return this.hobbies;
    }
}

const  per1:Person1 = new Person1("Devendra",22,["Cricket","Reading","Programming"]);

//! Method call (IntroduceParent)
console.log(per1.IntroduceParent());

const MCAStudents: Students1 = new Students1("Devendra",22,["Coding","Cricket","Reading"],10);

//! Method call (Introduce)
console.log(MCAStudents.Introduce());