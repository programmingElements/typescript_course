enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = 12,
    WINDOW = 22,
    FOURTH
}

const hcSeat = SeatChoice.WINDOW;

console.log(hcSeat);

if (hcSeat === 22) {
    console.log("Both are Same.");
}
else {
    console.log("Both are not Same.");
}


export {}