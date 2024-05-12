// let user: (string| number)[] = [1, "hc"]

let user: [string, number, boolean] = ["hc", 1, false];


user = ["FC", 131, true] // order of array

let rgb: [number, number, number] = [255, 123, 112];

type User = [number , string]

const newUser: User = [121, "example@gmail.com"];

newUser[1] = "hc.com"
// newUser.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.




export {}