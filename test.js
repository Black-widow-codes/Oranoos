console.log("Hello World");
let num1 = 50

const prompt = require('prompt-sync') ();

let number = 42; // the number being stored in the variable
console.log('stored number:' , 42);

let mutableVariable = 10; //can be reassigned
const immutableVariable = 20; //cannot be reassigned
console.log('MV:' , mutableVariable);
console.log('IMV:' , immutableVariable);

mutableVariable = 20; //reassigning changable variable
//immutableVariable = 40;
console.log('MV:' , mutableVariable);
console.log('IMV:' , immutableVariable);

//camel case standard loks like this camelCase

let isJavaScriptFun = false; //Boolean value
console.log('is javascript fun?' , isJavaScriptFun);

let x = 5;
let y = 10;
console.log('x < y' , x < y);
console.log('x > y' , x > y);
console.log('x === y' , x === y);
console.log('x !== y' , x !== y);

let a = 3;
let b = 8;
console.log('complex statement' , (x > y) && (a < b));

//How to take user input
const userInput = prompt ('Enter a number: ');
console.log('userinput' , userInput);

//How to use assignment operators
let variable = 5

//Addition
variable += 2;
console.log('+= operator' , variable);

//Subtraction
variable -= 2;
console.log('-= operator' , variable);

//Multiplication
variable *= 2;
console.log('*= operator' , variable);

//Division
variable /= 2;
console.log('/= operator' , variable);

//Exponential 
variable **= 2;
console.log('**= operator' , variable);

//Addition
variable ++; //only adds 1
console.log('++ operator' , variable);

//Subtraction
variable --; //only subtracts 1
console.log('-- operator' , variable);


/// Example: 'I will study at the library if it's open and if I don't have any chores at home.'

let libraryOpen = true; // If false -> library is closed
let chores = false;     // If false -> we have chores

if (libraryOpen && !chores) {
  console.log("I will study at the library");
} else {
  console.log("The library is closed or I have chores to do");
}


