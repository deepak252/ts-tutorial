// const cities = [] // cities: never[]
// cities.push("") // Error

// const cities: string [] = [] // cities: string[]
// // OR
// const cities: Array<string> = [] // cities: string[]

//// Array of type alias
// type User = {
//     name: string,
//     isActive: boolean
// }
// const users: User[] = []

//// 2D Array
// const grid: number[][] = []  
// grid.push([1,2,3])
// grid.push([4,5])

//// readonly Array
// const gender: readonly string[] = ['Male'] 
// OR
const gender: ReadonlyArray<String> = ['Male']  // gender: readonly String[]
// gender.pop() // Error


