"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 12] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 22] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 23] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.WINDOW;
console.log(hcSeat);
if (hcSeat === 22) {
    console.log("Both are Same.");
}
else {
    console.log("Both are not Same.");
}
