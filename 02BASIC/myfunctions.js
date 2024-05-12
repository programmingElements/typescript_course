"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "Hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper("jallu");
getUpper("6");
signUpUser("jallu", "jallu@lco.com", true);
loginUser("c", "c@lco.com");
// function getValue (myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
var modifiedHeros = heros.map(function (hero) {
    return "hero is ".concat(hero);
});
console.log(modifiedHeros);
