console.log("Hello World")
console.log("--------------------------")

// Types of Variables
// 1. Var
// 2. let (latest version)
// 3. const (latest version)

var name = "Aakarsh"
console.log(name)

// Diffrence between let and const
// let Variable
let age = 20
console.log(age)
// Value of variable can be changed

age = 21
console.log("Now I am", age, "years old")

// const variable
// Value of Variable can not be changed
// const dob = 2003
// console.log(dob)

// dob = 2000
// console.log(dob)

console.log("---------------------------")

// Difference between var and let
var a = 10;
var a = 20;
// Redeclaration is possible
console.log(a)

a =30;
// Reassignment is possible
console.log(a)

let b =10;
// Redeclaration is not possible
// let b = 20;
// Reassignment is possible
b=20;
console.log(b)

console.log("--------------------")

let firstName ="Aakarsh";
let lastName ="Chaurasia";
console.log(firstName + " " + lastName)

let bs =30000;
let hra = (10/100) * bs;
let da = (5/100) * bs;
let gs = bs + hra + da;
console.log("Gross Salary is", gs)
