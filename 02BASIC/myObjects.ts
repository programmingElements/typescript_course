// const User = {
//     name: "Hitesh",
//     email: "hitesh@lco.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {}

// let newUser = {name: "Hitesh", isPaid: true, email: "h@h.com"};

// createUser(newUser); // It not throwing any error

// function createCourse(): {name: string, price: number} {
//     return {
//         name: "expressjs",
//         price: 299
//     }
// }




// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser2(user: User): User {
//     return {
//         name: "Hitesh Choudhary",
//         email: "hitesh@lco.com",
//         isActive: true
//     }
// }

// createUser2({name: "", email: "", isActive: true});





type User2 = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credCardDetails?: number;
}

function createUser3(u: User2): User2 {
    return {
        ...u
    }
}

let myUser: User2 = {
    _id: "100",
    name: "Chakravarthi",
    email: "chakrijallu7@gmail.com",
    isActive: true
}

let myUser2: User2 = {
    _id: "200",
    name: "Hitesh Choudhary",
    email: "hiteshchoudhary23@lco.com",
    isActive: false
}

const data_01 = createUser3(myUser);

const data_02 = createUser3(myUser2);

myUser.email = "h@h.com";

// myUser._id = "250"; // Cannot assign to '_id' because it is a read-only property.

console.log(data_01);

console.log(data_02);


type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

function checkoutPayment(d: cardDetails): cardDetails {
    return {
        ...d
    }
}

const card_d = checkoutPayment({ cardNumber: "4242424242424242", cardDate: "12/25", cvv: 314});

console.log(card_d);

export {}