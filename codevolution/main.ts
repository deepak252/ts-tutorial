// Because the file is treated as script rather than a module.
// A module has its own scope but script share the global scope.
// So, adding 'export {}' statement TS will treat this file as a module.
export {}

let message = 'Hello World'
console.log(message);

// 1. Types
let isBeginner: boolean = false;
let total: number = 0;
let name: string = 'Deepak';

let n: null = null;
let u: undefined = undefined;
// null and undefined are subtypes of all other types
// null and undefined are not considered a subtypes of other types when strictNullChecks is enabled.
// i.e let x: number = undefined;

// Array
let list1: number[] = [1,3,4];
let list2: Array<number> = [1,3,4];

// Typle
let person1: [string, number] = ['deepak', 22];
let person2: [string, number, boolean] = ['deepak', 22, true];

// Enum
enum Color{
    Red = 5, // 5  // Default is 0
    Green, // 6
    Blue // 7
}
let c: Color = Color.Green 
console.log(c);  // 6

// Any
let randomValue: any = 10;
randomValue = true; // no error
randomValue = null; // no error
console.log(randomValue.name); // no error
randomValue() // no error

// Unknown (Similar to any type, however we can't access any property of unknown type, nor can call and construct them)
let unknownValue: unknown = 12;
unknownValue = 11 // no error
// unknownValue() // error
// unknownValue.toUpperCase() // error

// Type Assertion (Type Casting)
// (unknownValue as string).toUpperCase()



//// 2. Type Inference
let a; // a: any
a = 10; // no error
a = true; // no error

let b = 20;  // b: number, type inference
// b = true; // error

//// 3. Union
let multiType: number | boolean;
multiType = 20; // no error
multiType = false; // no error

//// 4. Functions
function add(num1: number, num2?: number, num3: number = 2): number{
    if(num2){
        return num1 + num2 + num3;
    }else{
        return num1;
    }
}
add(5,10, 4)
add(5,10)
add(5)


//// 5. Interface
// function fullname(person: {firstname: string, lastname?: string}){
//     console.log(person.firstname, person.lastname);
// }
interface Person{
    firstname: string,
    lastname?: string
}
function fullname(person: Person){
    console.log(person.firstname, person.lastname);
}
fullname({firstname: 'Deepak'});


//// 6. Classes and Objects
//// and Access Modifiers (public, private, protected)

class Employee{
    // private employeename: string
    // protected employeename: string
    employeename: string
    constructor(name: string){
        this.employeename = name
    }

    greet(){
        console.log(`Hello ${this.employeename}`);
    }
}

let emp1 = new Employee('Deepak');
console.log(emp1.employeename);
emp1.greet();

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName)
    }
    startProject(){
        console.log('manager starting project');
    }
}
let m1 = new Manager('Bruce');
m1.startProject();
m1.greet();

