// Example 1.
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// Example 2. (readonly and optional)
type Employee = {
    readonly id: number,
    name: string,
    email?: string, // Optional, email: string | undefined
    // isSignedIn?: ()=>boolean
    isSignedIn?(): boolean // OR
}
let emp1: Employee = {
    id: 1,
    name: "Emp 1",
    isSignedIn(){
      return true
    }
}
// emp1.id = 2 // error
emp1.name = "Emp 2" // no error




