// Basic Types
let age: number = 25;
let hobby: string = "hockey";
let isAdult: boolean = true;
let fruit: any = "apple";

// Arrays
let fruits: string[] = ["Apple", "Orange"];
let arr: any[] = [22, "a", true];
let numArr: number[][] = [[1], [2]];

// Tuples
let employee: [number, string] = [1, "Jack"];
let employees: [number, string][] = [
  [2, "Sarah"],
  [3, "Bill"],
];

// Objects
let car: {
  brand: string;
  year: number;
} = {
  brand: "Lexus",
  year: 2020,
};

// Custom Types
type Car = {
  brand: string;
  year: number;
};

let car1: Car = {
  brand: "Ford",
  year: 2009,
};

// Interfaces
interface Player {
  name: string;
  jersey_number: number;
}

let player1: Player = {
  name: "Connor McDavid",
  jersey_number: 97,
};

// Unions
let x: string | number = 22;
type occupation = "employed" | "student";
let jackOccupation: occupation = "student";

// Type Assertion
let y: any = "a";
y = <number>22;

// Functions
function add(x: number, y: number): number {
  return x + y;
}

// Functions that don't return anything
function sayHi(): void {
  console.log("Hi");
}

// Generics
function copyArr<T>(arr: T[]): T[] {
  return [...arr];
}

let numCopy = copyArr<number>([1, 2, 3]);
let strCopy = copyArr<string>(["1", "2", "3"]);

// Enums
enum EyeColor {
  brown = "Common eye color",
  blue = "Rare eye color",
  green = "Very rare eye color",
}

interface Student {
  name: string;
  age: number;
  eyeColor: EyeColor;
}

function displayStudent(student: Student): void {
  const info: string =
    student.name + "\n" + student.age + "\n" + student.eyeColor;
  document.body.innerText = info;
}

displayStudent({
    name: "Breven",
    age: 25,
    eyeColor: EyeColor.brown
});