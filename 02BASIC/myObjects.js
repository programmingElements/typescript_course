"use strict";
// const User = {
//     name: "Hitesh",
//     email: "hitesh@lco.com",
//     isActive: true
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function createUser3(u) {
    return __assign({}, u);
}
var myUser = {
    _id: "100",
    name: "Chakravarthi",
    email: "chakrijallu7@gmail.com",
    isActive: true
};
var myUser2 = {
    _id: "200",
    name: "Hitesh Choudhary",
    email: "hiteshchoudhary23@lco.com",
    isActive: false
};
var data_01 = createUser3(myUser);
var data_02 = createUser3(myUser2);
myUser.email = "h@h.com";
// myUser._id = "250"; // Cannot assign to '_id' because it is a read-only property.
console.log(data_01);
console.log(data_02);
function checkoutPayment(d) {
    return __assign({}, d);
}
var card_d = checkoutPayment({ cardNumber: "4242424242424242", cardDate: "12/25", cvv: 314 });
console.log(card_d);
