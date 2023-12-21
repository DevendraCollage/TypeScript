//?                / Parent Class / Child Class / Outside Class /
//todo             / ------------ / ----------- / ------------- / 
//?         Public / ✅           / ✅         / ✅            /
//?      Protected / ✅           / ✅         / ❌            / 
//?        Private / ✅           / ❌         / ❌            / 


//! Define Class - Parent
class PerData {
    public name:string;
    protected age:number;
    private hobbies:string[]; //! This is an array of an string

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

//! Child Class
class Students extends PerData {
    grade: number;

    constructor(name:string,age:number,hobbies:string[],grade:number){
        super(name,age,hobbies); //! Access the properties of parent class
        this.grade = grade;
    }

     //! Define function
     introduce(): string {
        // return `Hi, I am ${this.name} and I am ${this.age} year old. I love ${this.hobbies.join(",")} and I am in class ${this.grade}` //? Type-1 and In this you can not access the hobbies because of the access modifiers
        return `${super.introduce()}. I am in class ${this.grade}` //? Type-2
    }
}

//! Create Object of an Class
const PerData1:Students = new Students("Dev",22,["Cricket","Reading","Programming","Learn New Things"],12); //? Object-1 and Assign data into the Constructor
console.log(PerData1.introduce());

const PerData2:Students = new Students("Divine",22,["Cricket","Reading","Programming","Learn New Things"],12); //? Object-2 and Assign data into the Constructor
console.log(PerData2.introduce());