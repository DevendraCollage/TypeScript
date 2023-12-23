// *******************************************
//* INTERFACE VS TYPE
// *******************************************

// 1: Type can not extend other type
//? Use custom types when you need unions, intersections, or mapped types.
//? Use interfaces when during object shapes or classes that adhere to a contract.

type Stud1 = {
    name: string;
    age: number;
}

type StudAdd1 = {
    city: string;
    state: string;
}

type StudData1 =  Stud1 | StudAdd1;

const BioData1 : StudData = {
    name: "Devendra",
    age: 22,
    city: "Rajkot",
    state: 'Gujrat',
};

console.log(BioData1);

// 2: Interfaces can extend other interfaces to inherit their members
//? Interfaces can extend other interfaces to inherit their members.
//? Custom types can use unions and intersections for more complex type compositions.
//? same Interface name treated as one

interface Stud  {
    name: string;
    age: number;
}

interface StudAdd extends Stud {
    city: string;
    state: string;
}

interface StudData extends Stud, StudAdd {}

const BioData : StudData = {
    name: "Devendra",
    age: 22,
    city: "Rajkot",
    state: 'Gujrat',
};

console.log(BioData);