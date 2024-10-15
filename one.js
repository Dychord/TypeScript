var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 4;
// any code that is a valid js code is a valid ts code
var arr = [1, 2, 4, 5];
var arr2 = arr;
console.log(arr2.pop());
console.log(arr);
console.log(arr2);
var b;
//  If you are just defining a variable then you need to specify it's type.
var c = 2;
//  But if you are declaring it then it's no need!
var g = 5;
console.log(typeof g);
//  types in ts
var aa = 0;
var bb = "";
var tt = true;
var array = [1, 2, 3, 4];
var hsd = ["vikram", "nitin"];
//  tuples
//  with formation
var tup = [
    23,
    "Vikram",
    "nitin",
    "bhappu",
    true,
];
console.log(tup);
//  without formation
var tupl = ['ldfkjslfj', false, 343, 324, 'lkfjsldfjsdljf', true];
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
function neverReturnAnythin() {
    while (true)
        console.log("infinit run");
}
// neverReturnAnythin()
console.log("hey");
function returnNumber() {
    return 12;
}
returnNumber();
function returnsNothing() {
    console.log("hey");
}
// -----------------------ENUMS---------------------
// let currentDirection: string = 'north'
var Directions;
(function (Directions) {
    Directions[Directions["east"] = 0] = "east";
    Directions[Directions["west"] = 1] = "west";
    Directions[Directions["north"] = 2] = "north";
    Directions[Directions["south"] = 3] = "south";
})(Directions || (Directions = {}));
var currentDirection = Directions.north;
console.log(currentDirection);
var currentDirection2 = Directions.east; // if you assign it to string - it won't work as the default indexes are numbers
var Roles;
(function (Roles) {
    Roles["admin"] = "ADMIN";
    Roles["user"] = "USER";
})(Roles || (Roles = {}));
function userRole(role) {
    if (role === Roles.admin)
        return "You are admin!";
    return "Regular User";
}
// function userRole(role: Roles){
//     if(role === Roles.admin) return console.log("You are admin!");
//     console.log("Regular User");
// }
console.log(userRole(Roles.user));
// -------------------------------------UNION TYPES-------------------------------------------------------
var value;
value = 32;
if (typeof value === "string") {
    // console.log(value.length);
}
else if (typeof value === "number") {
    console.log(value.toFixed());
}
//  abhi in mese koi ek chal raha he but yeh same code chalega age isee hum ek function me likh dinge toh
function diffTypes(val) {
    if (typeof val === "string") {
        console.log(val.length);
    }
    else if (typeof val === "number") {
        console.log(val.toFixed());
    }
}
diffTypes(23);
diffTypes("heyyy");
//  see it works like a charm
// -------------------------------------INTERSECTION TYPES-------------------------------------------------------
var Section;
(function (Section) {
    Section["A"] = "A";
    Section["B"] = "B";
})(Section || (Section = {}));
var student = [
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
var firstName = '';
var human = {
    name: "Dychord",
    age: 23,
    email: "iamdychord@gmail.com"
};
console.log(human);
function getUserDetails(user) {
    user.name = 'Dychord';
    user.password = 'sldkfjsldkjflfl2k3j2lkjr34534lkj';
}
function getStudentDetails(student) {
    student.name = 'Vikram',
        student.gender = 'Male';
}
// ---------------------------CLASS----------------------------
var hghg = 'hello';
var AirConditioner = /** @class */ (function () {
    function AirConditioner() {
        this.temp = 16;
    }
    AirConditioner.prototype.turnOnAC = function (name) {
        console.log("Turned On ".concat(name));
    };
    AirConditioner.prototype.raiseTemp = function () {
        console.log(this.temp++);
    };
    AirConditioner.prototype.turnOffAC = function (name) {
        console.log("Turned Off ".concat(name));
    };
    return AirConditioner;
}());
var ac = new AirConditioner();
ac.turnOnAC('Ac1');
//  CONSTRUCTORS - In TypeScript, constructors are special methods within classes that are responsible for initializing the class's properties when an object of the class is created. The constructor is called automatically when a new instance of the class is created using the new keyword.
var ClassName = /** @class */ (function () {
    function ClassName() {
        // Initialization code
    }
    return ClassName;
}());
var Car = /** @class */ (function () {
    function Car(name, discount) {
        this.name = name,
            this.discount = discount;
    }
    Car.prototype.carDetails = function () {
        console.log(this.name, this.discount);
    };
    return Car;
}());
var car = new Car('Tesla', 120000);
car.carDetails();
//  **ACCESS MODIFIER BY DEFUALT IS **PUBLIC**
var Games = /** @class */ (function () {
    function Games(name) {
    }
    return Games;
}());
//  instead of this - we could also do this
var Games1 = /** @class */ (function () {
    function Games1(name) {
        this.name = name;
    }
    return Games1;
}());
// -------------PUBLIC
var Bike = /** @class */ (function () {
    function Bike() {
        this.name = 'Ducatti';
    }
    Bike.prototype.getBikeName = function () {
        console.log(this.name);
    };
    return Bike;
}());
var bike = new Bike();
bike.name = 'YAMAHA'; // we can later change this bcz of public keyword
// bike.getBikeName()
// --------------PRIVATE
var Bike2 = /** @class */ (function () {
    function Bike2() {
        this.name = 'Ducatti';
    }
    Bike2.prototype.getBikeName = function () {
        console.log(this.name);
    };
    Bike2.prototype.setBikeName = function (name) {
        this.name = name;
    };
    return Bike2;
}());
var bike2 = new Bike2(); // we can later change this bcz of public keyword
bike2.setBikeName("YAMAHA");
bike2.getBikeName();
// --------------PROTECTED
var People = /** @class */ (function () {
    function People() {
        this.limbs = 4; // can be accessed by same and the class that extends it
        this.height = 6.1; // only be accessable by this same class
    }
    return People;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Person.prototype.getLimbs = function () {
        console.log(this.limbs);
    };
    Person.prototype.setlimbs = function (limbs) {
        this.limbs = limbs;
    };
    return Person;
}(People));
var person = new Person();
person.eye = 4; // only a variable or fn with public keyword can be manipulated outside of it's class scope or child class scope
person.setlimbs(6);
person.getLimbs();
// --------------------READONLY and GETTER SETTER-------------------
var Laptops = /** @class */ (function () {
    function Laptops(discount) {
        this.discount = discount;
        this.discount = discount;
    }
    Object.defineProperty(Laptops.prototype, "name", {
        //  predefined getter and setter
        get: function () {
            return this.username;
        },
        set: function (username) {
            this.username = username;
        },
        enumerable: false,
        configurable: true
    });
    //  how i like
    // getDiscount() {
    //     console.log(`The discount of the product is fixed ${this.discount}`);
    // }
    Laptops.prototype.getDiscount = function () {
        return this.discount;
    };
    Laptops.prototype.setDiscount = function (discount) {
        // this.discount = discount
    };
    return Laptops;
}());
var lap = new Laptops(8);
lap.name = 'Dychord';
console.log(lap.name);
console.log(lap.getDiscount());
lap.setDiscount(10);
lap.name = 'Lenovo Ideapad Slim i5';
console.log(lap.name);
// ------------------------------FUNCTIONS-------------------------------
// Named Function -------------
// Anonymus Function -------------
// function(): void { };  //You cannot write function(): void {} by itself without context or invocation. This will cause a syntax error:
// You can write function(): void {} as a valid function signature in TypeScript, but you must either assign the function to a variable or use it as part of a larger expression (such as in a callback or an IIFE). If you write it by itself, it won't do anything, and you'll likely get a syntax error.
var greet = function () {
    console.log("hey");
};
greet();
// Arrow Function -------------
var arrowFn = function () {
    return "Falcon";
};
arrowFn();
// Immediately Invoked Function Expressions (IIFE) -------------
(function () {
    console.log("IIFE");
})();
// Explicit Return Type -------------
var hero = function () {
    return "Superman";
};
// Implicit Return Type -------------
var hero2 = function () {
    return "Spiderman";
};
// Optional Parameters -------------
function userDetails(name, age, gender) {
    return "".concat(name);
}
userDetails('Falcon', 28);
// Default Parameters -------------
function tellStory(storyName) {
    if (storyName === void 0) { storyName = 'default'; }
    return "So this story is about a girl who...";
}
tellStory("Frozen"); // default parameters helps us to set a default value for the field if not provided when we call the funtion! And when I do provide it I can still keep the default value!
// Rest Parameters -------------
function spreadOperatorAndRestOperator(someNumber) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(names);
}
spreadOperatorAndRestOperator(3, "Ronaldo", "Messi", "Gian", "ZombieLand");
function returnName(firstName, lastName) {
    return "".concat(firstName + ' ' + lastName);
}
console.log(returnName('Dychord', 'Gaming'));
// -------------------------------MODULES------------------------------
// -------------------------------TYPE ASSERTIONS----------------------
// defining the type of parameter of your frontend part - like
var para = document.getElementById('para');
if (para) {
    para.innerText = "New paragraph content!";
}
// Type assertion (as HTMLParagraphElement) is the most common and recommended approach.
// Type casting (<HTMLParagraphElement>) is also valid but less common in modern TypeScript.
// const para = <HTMLParagraphElement>document.getElementById('para');
// Alternative Option:
// If you want to keep para as HTMLElement, you don't need the type assertion to HTMLParagraphElement. But in that case, TypeScript won't know that para is a paragraph, and it might complain when accessing innerText or other paragraph-specific properties.
// const para: HTMLElement | null = document.getElementById('para');
// if (para instanceof HTMLParagraphElement) {
//     para.innerText = "New paragraph content!";
// }
