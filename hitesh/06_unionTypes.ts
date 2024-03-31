//// 1.
// let strOrNum: string | number;
// strOrNum = 3;
// strOrNum = "Hello";
// let group: "male" | 'female'
// group = 'Other' // Error

//// 2.
type User = {
    uid: number
    name: string,
}
type Admin = {
    adminId: number
}
// let user1: User | Admin  = { // Error: Property 'name' is missing
//     uid: 1,
// }
let user2: User | Admin  = { // No error
    adminId: 4
}
let user3: User | Admin  = { // No error
    uid: 1,
    name: 'Deepak'
}
let user4: User | Admin  = { // No error
    uid: 1,
    name: 'Deepak',
    adminId: 4
}

//// 3. Union with params
function checkUser(idOrEmail: number | string){
    // idOrEmail.toLowerCase()// Error
    // idOrEmail.toFixed()// Error
    if(typeof idOrEmail === 'string'){ // string
        console.log(idOrEmail.toLowerCase());
    }else{  // number
        console.log(idOrEmail.toFixed(2));
    }
}

//// 4. Union with array
// const data: number[] | string[] = [1,2,3,"a"] // Error
// const data: number[] | string[] = [1,2,3] // no error
// const data: number[] | string[] = ["1","2","3"] // no error
// const data: (number | string)[] = [1,2,3,"a"] // no error
// const data: Array<number | string> = [1,2,3,"a"] // no error


