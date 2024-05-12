const superHeros: string[] = [];
// const heroPower: number[] = [];
const heroPower: Array<number> = []; // another way of defining/declaring number

type User = {
    name: string;
    isActive: boolean;
}

const allUsers: User[] = []

const MLModels: number[][] = [
    [255, 255, 255],
]

superHeros.push("batman");
heroPower.push(2);

allUsers.push({
    name: "chakri",
    isActive: true
});

allUsers.push({
    name: "hitesh",
    isActive: false
})

// console.log(allUsers); 


export {}