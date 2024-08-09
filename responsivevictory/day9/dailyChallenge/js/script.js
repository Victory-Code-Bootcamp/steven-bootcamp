// Challenge One
// Create a prompt asking for their name
let name = prompt("Enter your name");
// Create a Switch statement with 3 different cases, one of those cases should include the expected value
switch (name) {
  case "Steven":
    alert("your name is steven");
    break;
  case "Victor":
  case "Chandler":
    alert("Your name is either Victor or Chandler");

    break;
  default:
    alert(`sorry you don't have access ${name}.`);
}
// Use an alert() as the result for each case
// Challenge Two
// Create a prompt asking for their age and store the result in a variable
let age = prompt("How old are you?");

// Write a function that takes the prompt result as a argument and returns ternary expression with a boolean depending if their age is less than or equal to 18
let adult = (ageOfPerson) =>
  ageOfPerson <= 18 ? "not an adult yet" : "Welcome to adult hood";
console.log(adult(age));

// Challenge Three
// You are given a string of characters. Write a function that takes the string as an arguments and returns the codes below using if/else if statement
// AA if chars is greater than 15
// AB if chars is greater than 13 and less than or equal to 15
// BB if chars is greater than 10 and less than or equal to 13
// BC if chars is greater than 7 and less than or equal to 10
// CC if chars is greater than 5 and less than or equal to 7
// DD if chars is less than or equal to 5
let characters = "lorem impsum";
let codedletter = (str) => {
  if (str.length > 15) {
    return console.log("AA");
  }
  if (str.length > 13 && str.length <= 15) {
    return console.log("AB");
  }
  if (str.length > 10 && str.length <= 13) {
    return console.log("BB");
  }
  if (str.length > 7 && str.length <= 10) {
    return console.log("BC");
  }
  if (str.length > 5 && str.length <= 7) {
    return console.log("CC");
  } else {
    return console.log("DD");
  }
};
codedletter(characters);

let codedletter2 = (str) =>
  str.length >= 15
    ? "AA"
    : str.length > 13 && str.length <= 15
    ? "AB"
    : str.length > 10 && str.length <= 13
    ? "BB"
    : str.length > 7 && str.length <= 10
    ? "BC"
    : str.length > 5 && str.length <= 7
    ? "CC"
    : "DD";
console.log(codedletter2(characters));

// Challenge Four
// In this challenge you will be writing code to create functions capable of different arithmetic operations
// Write an add function that returns the result of num1 plus num2
// Write a subtract function that returns the result of num1 minus num2
// Write a multiply function that returns the result of num1 times num2
// Write a divide function that returns the result of num1 divided num2
let add = (num1, num2) => num1 + num2;

let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

console.log(add(3, 5));
console.log(subtract(3, 5));

console.log(multiply(3, 3));
console.log(divide(6, 2));
