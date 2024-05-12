/*

class User {
    public email: string;
    private name: string;
    readonly city: string = "Jaipur";
    constructor(email: string, name: string) {
        this.email = email;
        this.name  = name;
    }
}

const hitesh = new User("h@lco.com", "hitesh");
// hitesh.city = "Delhi"; // It is readonly variable we cannot re-assign
console.log(hitesh.city); // we can still access the city
// console.log(hitesh.name); // we cannot access the name variable because it is the private 


*/

class User {
    // private _courseCount = 1;
    protected _courseCount = 1;
    readonly city: string = "Jaipur";
    constructor(
        public email: string,
        public name: string,
        // private userId: string
    ) 
    {
    }

    private deleteToken() {
        console.log("Token Deleted.");
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course Count should be more than 1")
        }
        this._courseCount = courseNum;
    }

}

class SubUser extends User {
    isFamily: boolean = true;

    changeCourseCount() {
        this._courseCount = 4
    }
}

const hitesh = new User("h@lco.com", "hitesh");
// hitesh.deleteToken(); // private method cannot access 