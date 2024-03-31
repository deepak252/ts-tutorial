const user = {
    uname: 'Deepak', 
    email: 'deepak@gmail.com',
    isPaid: true
}

function createUser({uname, isPaid}: {uname: string, isPaid: boolean}){
    console.log(uname, isPaid); 
}

// createUser(user)
function createUser2({uname, isPaid}):{}{
    console.log(uname, isPaid); 
    return {name:'deepak', isPaid: false}
}

//// XXX Incorrect Usage XXX
//// Here, uname, isPaid is not assigned a type, instead desctructuring the object
// function createUser5({uname: string, isPaid: boolean}){ // 
//     console.log(uname, isPaid); // Cannot find name 'uname', 'isPaid'
// }
// // => createUser5({ uname: string, isPaid: boolean }: {
// //     uname: any;
// //     isPaid: any;
// // }): void

// function createUser6({uname: string, isPaid: boolean}: any){ // Incorrect
//     console.log(uname, isPaid); 
// }
// function createUser7({uname: xyz, isPaid: abc}: any){ 
//     console.log(xyz, abc); // no error
// }
