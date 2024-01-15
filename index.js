"use strict";
// Basic Types
let age = 25;
let hobby = "hockey";
let isAdult = true;
let fruit = "apple";
// Arrays
let fruits = ["Apple", "Orange"];
let arr = [22, "a", true];
let numArr = [[1], [2]];
// Tuples
let employee = [1, "Jack"];
let employees = [
    [2, "Sarah"],
    [3, "Bill"],
];
// Objects
let car = {
    brand: "Lexus",
    year: 2020,
};
let car1 = {
    brand: "Ford",
    year: 2009,
};
let player1 = {
    name: "Connor McDavid",
    jersey_number: 97,
};
// Unions
let x = 22;
let jackOccupation = "student";
// Type Assertion
let y = "a";
y = 22;
// Functions
function add(x, y) {
    return x + y;
}
// Functions that don't return anything
function sayHi() {
    console.log("Hi");
}
// Generics
function copyArr(arr) {
    return [...arr];
}
let numCopy = copyArr([1, 2, 3]);
let strCopy = copyArr(["1", "2", "3"]);
// Enums
var EyeColor;
(function (EyeColor) {
    EyeColor["brown"] = "Common eye color";
    EyeColor["blue"] = "Rare eye color";
    EyeColor["green"] = "Very rare eye color";
})(EyeColor || (EyeColor = {}));
function displayStudent(student) {
    const info = student.name + "\n" + student.age + "\n" + student.eyeColor;
    document.body.innerText = info;
}
displayStudent({
    name: "Breven",
    age: 25,
    eyeColor: EyeColor.brown
});
