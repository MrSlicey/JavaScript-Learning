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
//let age = 20; //number
let student = true; //booleans

//Logging Strings and Variables within the console.
console.log("Hello", firstName);
//console.log("You are", age, "years old.");
console.log("Enrolled:", student);

//Get ElementbyID allows you to edit / Concatenate / fill elements with unique identifiers.
document.getElementById("p1").innerHTML = "Hello " + firstName;
//document.getElementById("p2").innerHTML = "You are " + age + " years old.";
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
//userName = userName.toLowerCase()

phoneNumber = phoneNumber.replaceAll("-", "/");

console.log(phoneNumber);

// String Slicing
//Extracts a section of a string and returns it as a new string without modifying the string.
let fullName = "Bailey Buxton";
let fName;
let lName;

//fName = fullName.slice(0, 6);
//lName = fullName.slice(7);4888

fName = fullName.slice(0, fullName.indexOf(" "));

lName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(fName);
console.log(lName);

// Method Chaining = calling one methhhod after anothhher in one line of code.

let myName = "bailey";

let letter = myName
  .charAt(0)
  .toUpperCase()
  .trim()
  .concat(" is the first letter");

console.log(letter);

// If and Else statements = If something is true, do it, else dont this instead

/*
let age = 65;

if(age >= 65){
  console.log("You are a senior citizen")
}
else if (age >= 18){

console.log("You are an adult")
}
else if(age < 0){
  console.log("You havent been born yet!")
}

else{
  console.log('You are a child')
}
*/

let online = true;
if (online) {
  console.log("You are online!");
} else {
  console.log("You are offline!");
}

//Checked Function

document.getElementById("cbsubmit").onclick = function () {
  //if (document.getElementById("checkbox").checked) {

  const subcheckbox = document.getElementById("checkbox");

  if (subcheckbox.checked) {
    console.log("You are subscribed!");
  } else {
    console.log("You are NOT subscribed!");
  }
};

const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
document.getElementById("paybtn").onclick = function () {
  if (visaBtn.checked) {
    console.log("You are paying with a Visa card!");
  } else if (mastercardBtn.checked) {
    console.log("You are paying with a Mastercard!");
  } else if (paypalBtn.checked) {
    console.log("You are paying through Paypal!");
  } else {
    console.log("You must select a payment option.");
  }
};

//Switch = statement that examines a value for a match against many case caluses. More effecient than many if else statements.

document.getElementById("checkgrade").onclick = function () {
  let grade = document.getElementById("grade").value;

  switch (grade) {
    case "A":
      console.log("You did great!");
      break;
    case "B":
      console.log("You did good!");
      break;
    case "C":
      console.log("You did okay!");
      break;
    case "D":
      console.log("You passed... barely!");
      break;
    case "F":
      console.log("You FAILED!");
      break;
    default:
      console.log(grade, "is not a letter grade between A-D or F");
  }
};
