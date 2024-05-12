interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    // startTrail: () => string;
    startTrail(): string;
    getCoupon(couponname: string, value: number): number;
}

interface User {
    githubToken: string;
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

// let hitesh: User = {
//     dbId: 6742,
//     githubToken: "github",
//     email: "hc@lco.com",
//     userId: 2211,
//     startTrail: () => {
//         return "Trail is Started";
//     },
//     getCoupon: (name: "hitesh10", off: 0) => {
//         return 10
//     }
// }

// hitesh.email = "hitesh6@lco.com";
// hitesh.dbId = 7892

let rajeshkumar: Admin = {
    dbId: 6742,
    role: "admin",
    githubToken: "github",
    email: "rk@lco.com",
    userId: 2211,
    startTrail: () => {
        return "Trail is Started";
    },
    getCoupon: (name: "rajeshk10", off: 0) => {
        return 10
    }
}




export {};
