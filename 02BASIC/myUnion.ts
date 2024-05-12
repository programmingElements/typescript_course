let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let hitesh: User | Admin = {
    name: "hitesh",
    id: 334
}

hitesh = {
    username: "hc",
    id: 334
}

// function getDbId(id: number | string) {
//     // making some API Calls
//     console.log(`DB id is : ${id}`);
// }

getDbId(3)

getDbId("3")

function getDbId(id: number | string) {
    // making some API Calls
    // console.log(`DB id is : ${id}`);
    // id.toUpperCase(); // will raise an error
    
    if (typeof id === "string") {
        id.toLowerCase();
    }

    if (typeof id === "number") {
        id.toFixed(2)
    }
}

// array 

let data: number[] = [1, 2, 3];

let data2: string[] = ["1", "2", "3"];

let data3: (string | number | boolean)[] = ["1", 2, true, 3, "4", false];

let pi:3.14 = 3.14;

// pi = 3.15 // it will throws an error not allow 


let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew"; // "crew" is allowed to the seatAllotment


