let a = 4;
// any code that is a valid js code is a valid ts code
let arr = [1, 2, 4, 5];
let arr2 = arr;
console.log(arr2.pop());
console.log(arr);
console.log(arr2);

let b: number;
//  If you are just defining a variable then you need to specify it's type.
let c = 2;
//  But if you are declaring it then it's no need!

let g: number = 5;
console.log(typeof g);

//  types in ts
const aa: number = 0;
const bb: string = "";
const tt: boolean = true;
const array: number[] = [1, 2, 3, 4];
const hsd: string[] = ["vikram", "nitin"];


//  tuples
//  with formation
const tup: [number, ...string[], boolean] = [
    23,
    "Vikram",
    "nitin",
    "bhappu",
    true,
];
console.log(tup);

//  without formation
const tupl: (string | number | boolean)[] = ['ldfkjslfj', false, 343, 324, 'lkfjsldfjsdljf', true]

// The spread operator (...) is used in TypeScript to indicate a rest element in a tuple, but it can only be applied once and must be at the end of the tuple definition. You can't spread multiple types like this within a tuple.
// const tup: [...number[], ...string[], ...boolean[]] = [23, 42, 'Vikram', 'John', true, false];

// How to Correct It
// You can achieve a similar effect using union types or a rest element at the end:
// what is a rest element?
// const [first, ...rest] = [1, 2, 3, 4, 5];

// 1. Using Union Types in an Array
// If you want a flexible array with numbers, strings, and booleans, you can define it as an array of union types:

// const arr: (number | string | boolean)[] = [23, 42, 'Vikram', 'John', true, false];

// 2. Using a Tuple with a Rest Element
// If you want to define a tuple with a specific order followed by a rest of mixed types, you can use a rest element at the end of the tuple definition:

// const tup: [number, ...string[], ...boolean[]] = [23, 'Vikram', 'John', true, false];

// --------------------------------------------------------------------------------------------------
//  any, unknown, never, void
//  unknown and any works very similar - we use unknown when we are not sure about what type do we want our variable or fn to be...and any is like make it any type

//  the use of never is very trick - it basically says that 'if used on a fn it will never return anything and the code after that will not run either'
function neverReturnAnythin(): never {
    while (true) console.log("infinit run");
}

// neverReturnAnythin()
console.log("hey");

function returnNumber(): number {
    return 12;
}
returnNumber();

function returnsNothing(): void {
    console.log("hey");
}

// -----------------------ENUMS---------------------

// let currentDirection: string = 'north'
enum Directions {
    east, // 0
    west, // 1
    north, // 2
    south, // 3
}
let currentDirection: Directions = Directions.north;
console.log(currentDirection);

let currentDirection2: number = Directions.east; // if you assign it to string - it won't work as the default indexes are numbers

enum Roles {
    admin = "ADMIN",
    user = "USER",
}
function userRole(role: Roles): string {
    if (role === Roles.admin) return "You are admin!";
    return "Regular User";
}
// function userRole(role: Roles){
//     if(role === Roles.admin) return console.log("You are admin!");
//     console.log("Regular User");
// }
console.log(userRole(Roles.user));

// -------------------------------------UNION TYPES-------------------------------------------------------

let value: string | number;
value = 32;

if (typeof value === "string") {
    // console.log(value.length);
} else if (typeof value === "number") {
    console.log(value.toFixed());
}

//  abhi in mese koi ek chal raha he but yeh same code chalega age isee hum ek function me likh dinge toh

function diffTypes(val: number | string) {
    if (typeof val === "string") {
        console.log(val.length);
    } else if (typeof val === "number") {
        console.log(val.toFixed());
    }
}
diffTypes(23);
diffTypes("heyyy");

//  see it works like a charm

// -------------------------------------INTERSECTION TYPES-------------------------------------------------------

enum Section {
    "A" = 'A',
    "B" = 'B'
}

type Classmates = {
    section: string;
};
type Students = {
    name: string;
};

type CS = Classmates & Students;


let student: CS[] = [
    {
        section: Section.A,
        name: "Vikram",
    },
    {
        section: Section.B,
        name: "Falcon",
    },
];

console.log(student);




// -------------------------------TYPE ALIASES-----------------------------

// primitive type ALIASES
type Name = string
const firstName: Name = '';

// object type aliases
type Human = {
    name: string,
    age: number,
    email: string
}

const human: Human = {
    name: "Dychord",
    age: 23,
    email: "iamdychord@gmail.com"
}

console.log(human);



// ----------------------INTERFACES---------------------
// Interface humhe class and objects ka shape banake deta he

interface User {
    name: string,
    username: string,
    email: string,
    password: string,
    age: number,
    gender: string
}

function getUserDetails(user: User) {
    user.name = 'Dychord'
    user.password = 'sldkfjsldkjflfl2k3j2lkjr34534lkj'
}


// extends keyword

interface Student extends User {

}

function getStudentDetails(student: Student) {
    student.name = 'Vikram',
        student.gender = 'Male'
}


// ---------------------------CLASS----------------------------

const hghg: string = 'hello';

class AirConditioner {
    discount!: number;     // '!' indicates that discount will be definitely assigned later
    name!: string;
    temp: number = 16;

    turnOnAC(name: string) {
        console.log(`Turned On ${name}`);
    }

    raiseTemp() {
        console.log(this.temp++);
    }

    turnOffAC(name: string) {
        console.log(`Turned Off ${name}`);
    }

}

const ac = new AirConditioner();

ac.turnOnAC('Ac1')


//  CONSTRUCTORS - In TypeScript, constructors are special methods within classes that are responsible for initializing the class's properties when an object of the class is created. The constructor is called automatically when a new instance of the class is created using the new keyword.

class ClassName {
    constructor() {
        // Initialization code
    }
}

class Car {
    discount!: number
    name!: string

    constructor(name: string, discount: number) {
        this.name = name,
            this.discount = discount
    }

    carDetails() {
        console.log(this.name, this.discount);
    }
}

const car = new Car('Tesla', 120000)

car.carDetails();

//  **ACCESS MODIFIER BY DEFUALT IS **PUBLIC**

class Games {
    name!: string
    constructor(name: string) {

    }

}

//  instead of this - we could also do this

class Games1 {

    constructor(public name: string) {   // we didn't have it explicitly declare or intilise the name variable above constructor...if we use public, private or protected expiciltly

    }

}


// -------------PUBLIC

class Bike {
    public name: string = 'Ducatti'

    getBikeName() {
        console.log(this.name);
    }

}

const bike = new Bike()
bike.name = 'YAMAHA'    // we can later change this bcz of public keyword
// bike.getBikeName()


// --------------PRIVATE

class Bike2 {
    private name: string = 'Ducatti'

    getBikeName() {  // getter
        console.log(this.name);
    }

    setBikeName(name: string) {   // setter
        this.name = name
    }

}

const bike2 = new Bike2()  // we can later change this bcz of public keyword
bike2.setBikeName("YAMAHA")
bike2.getBikeName()


// --------------PROTECTED

class People {
    protected limbs: number = 4;    // can be accessed by same and the class that extends it
    private height: number = 6.1;    // only be accessable by this same class
    public eye!: number;
}

class Person extends People {

    getLimbs() {
        console.log(this.limbs);
    }
    setlimbs(limbs: number) {
        this.limbs = limbs
    }

}

const person = new Person()
person.eye = 4;     // only a variable or fn with public keyword can be manipulated outside of it's class scope or child class scope
person.setlimbs(6)
person.getLimbs()



// --------------------READONLY and GETTER SETTER-------------------

class Laptops {

    username!: string;

    //  predefined getter and setter
    get name() {
        return this.username
    }
    set name(username: string) {
        this.username = username
    }


    constructor(public readonly discount: number) {
        this.discount = discount
    }
    //  how i like
    // getDiscount() {
    //     console.log(`The discount of the product is fixed ${this.discount}`);
    // }

    getDiscount() {
        return this.discount
    }

    setDiscount(discount: number) {
        // this.discount = discount
    }


}

const lap = new Laptops(8)
lap.name = 'Dychord'
console.log(lap.name);
console.log(lap.getDiscount());
lap.setDiscount(10)
lap.name = 'Lenovo Ideapad Slim i5'
console.log(lap.name);



// ------------------------------FUNCTIONS-------------------------------

// Named Function -------------

// Anonymus Function -------------
// function(): void { };  //You cannot write function(): void {} by itself without context or invocation. This will cause a syntax error:
// You can write function(): void {} as a valid function signature in TypeScript, but you must either assign the function to a variable or use it as part of a larger expression (such as in a callback or an IIFE). If you write it by itself, it won't do anything, and you'll likely get a syntax error.
const greet = function (): void {
    console.log("hey");
};
greet();


// Arrow Function -------------
const arrowFn = (): string => {
    return "Falcon";
};
arrowFn();
// Immediately Invoked Function Expressions (IIFE) -------------
(function (): void {
    console.log("IIFE");
})()


// Explicit Return Type -------------
const hero = (): string => {
    return "Superman"
}
// Implicit Return Type -------------
const hero2 = () => {
    return "Spiderman"
}


// Optional Parameters -------------
function userDetails(name: string, age: number, gender?: string): string {     // ? - aa jaye toh thik nahi aye toh thik!
    return `${name}`
}
userDetails('Falcon', 28)


// Default Parameters -------------
function tellStory(storyName: string = 'default'): string {
    return "So this story is about a girl who..."
}
tellStory("Frozen")   // default parameters helps us to set a default value for the field if not provided when we call the funtion! And when I do provide it I can still keep the default value!

// Rest Parameters -------------
function spreadOperatorAndRestOperator(someNumber: number, ...names: string[]): void {
    console.log(names);
}
spreadOperatorAndRestOperator(3, "Ronaldo", "Messi", "Gian", "ZombieLand")

function returnName(firstName: string, lastName: string): string {    // Remember two things first - what's the function is returning and second - what type of parameters does it have!
    return `${firstName + ' ' + lastName}`
}

console.log(returnName('Dychord', 'Gaming'));