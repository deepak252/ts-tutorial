const tUser1: [string] = ["Deepak"]

const tRGB: [number, number, number] = [255,255,255]

type TUser = [string, number, boolean]
const tUser2: TUser = ["Deepak", 1, true]
tUser2[0] = "Abcd"
// tUser2.push(23) // no error, avoid
console.log(tUser2);
