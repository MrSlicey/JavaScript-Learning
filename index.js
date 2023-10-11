console.log("I like pizza!");

console.log("It's really good!");

//window.alert('I really love Pizza!')

//This is a comment

/*
This is a multi-line comment
*/

//VARIABLES
/* 
A Variable is a container for storing data, it behaves as if it is the value is contains.

It is composed via a;
1. Declaration (var, let, const)
2. Assignment (= assignment operator) */

let firstName = "Bailey"; //string
let age = 20; //number
let student = true; //booleans

//Logging Strings and Variables within the console.
console.log("Hello", firstName);
console.log("You are", age, "years old.");
console.log("Enrolled:", student);

//Get ElementbyID allows you to edit / Concatenate / fill elements with unique identifiers.
document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old.";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

/*
Arithmetic Expressions
Operands (Values, variables, etc...)
Operators (+ - * % / **)
ex: y = x + 5;
*/

let students = 20;
let extraStudents = students % 3;

//students = students ** 3
students += 1; // -= /= *=

let result = 1 + 2 * (3 + 4);

console.log(result);

//How to accept user input

//let username = window.prompt("What's your name?")

document.getElementById("myButton").onclick = function () {
  username = document.getElementById("mytext").value;
  console.log(username);
  document.getElementById("mylabel").innerHTML = "Hello! " + username;
};

//Type Conversion
//The ability to change the data type of a value to another (strings, booleans, numbers)

//let Age = window.prompt("how old are you?")

/*console.log(typeof Age)
Age = Number(Age)
Age += 1;
console.log(typeof Age)

console.log("Happy birthday you are", Age, "years old");*/

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//const = a variable that cannot be changed.

//radius = window.prompt("Enter the radius of a circle:");

//PI = 420.69;
document.getElementById("myButton2").onclick = function () {
  const PI = 3.14159;

  let radius;
  radius = Number(radius);
  radius = document.getElementById("mytext2").value;

  let circumference;
  circumference = 2 * PI * radius;

  console.log("The circumference is", circumference);
};

// Math Methods

let h;
let k = 5;
let l = 12;
let maximum;
let minimum;

// Mathematical Functions which will perform a caluclation to a variable.

//h = Math.round(h);
//h = Math.floor(h);
//h = Math.ceil(h);
//h = Math.pow(h, 2);
//h = Math.sqrt(h);
//h = Math.abs(h);

h = Math.PI;

maximum = Math.max(h, k, l);

minimum = Math.min(h, k, l);

console.log(minimum);

//useful String Properties and Methods

let phoneNumber = "123-456-7890";
let userName = "   Bailey Buxton   ";

//console.log(userName.length)
//console.log(userName.charAt(8))
//console.log(userName.indexOf("B"))
//console.log(userName.lastIndexOf("B"))
//userName = userName.trim()
//userName = userName.toUpperCase()

phoneNumber = phoneNumber.replaceAll("-", "/");

console.log(phoneNumber);
