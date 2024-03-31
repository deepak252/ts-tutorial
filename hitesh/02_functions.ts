// function sum(num1, num2){ // function add(num1: any, num2: any): any
//     return num1+num2;
// }

function sum(num1: number, num2: number){ // function sum(num1: number, num2: number): number
    return num1+num2;
}
function sum2(num1: number, num2: number=2){ // function sum2(num1: number, num2?: number): number
    return num1+num2;
}
function getUpper(val: string){ // function getUpper(val: string): string
    return val.toUpperCase();
}
// function getUpper2(val: string):string{
//     return 12 //Error: Type 'number' is not assignable to type 'string'
// }

// Arrow Function
const getUpper3 = (val: string) :string => { // function getUpper(val: string): string
    return val.toUpperCase();
}

function getStatus(num: number){ //function getStatus(num: number): 200 | "ERROR"
    if(num<400){
        return 200
    }
    return "ERROR"
}
// returns nothing
function consoleError(errmsg: string): void{
    console.error(errmsg);
}

// A function returning 'never' cannot have a reachable end point
function handleError(errmsg: string): never{
    throw new Error(errmsg)
}

const arr = ["a","b", 1, 2] // arr: (string | number)[]
let res = arr.map((e):boolean=>{ // res: boolean[],  e: string | number
    return true
})
