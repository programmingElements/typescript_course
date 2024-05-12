// array of numbers
const score: Array<number> = [];

// array of strings
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
   return val; 
}

function identityThree<Type>(val: Type): Type {
    return val;
}

// identityThree("Hitesh Choudhary")

function identityFour<T>(val: T): T {
    return val;
}


interface Bootle {
    brand: string;
    type: number;
}

// custom data types are there we going to call function like this 
identityFour<Bootle>({brand: "Tupperware", type: 45});


function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}

/*

function anotherFunction<T,U extends number>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, 4.5);

*/

interface Database {
    connection: string;
    username: string;
    password: string;
}

function anotherFunction<T,U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3, {})
// anotherFunction(3, {connection: "", username: "", password: "", islogin: false, isGoogleAuth: false});


interface Quiz {
    name: string;
    type: string;
}

interface Course {
    name: string;
    author: string;
    subject: string;
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}