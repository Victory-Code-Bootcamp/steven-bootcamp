//Store two numbers in two different variables. Create another variable that determines the biggest number of the two
let num1 = 15;
let num2 = 27;

let biggestNumber = Math.max(num1, num2);
console.log(`The biggest number is:, ${biggestNumber}`);

//Create a variable that generates a random number that is rounded down to the nearest interger

// Generates a random number between 0 and 99
let randomNumber = Math.floor(Math.random() * 100);
console.log(`Random number:,${randomNumber}`);

//Have the user enter a number into the prompt and use that number to alert the user of the square root of the number they entered

let input = prompt("Enter a number to get the Square Root:");
let sqroot = Math.sqrt(input);
alert(`The Square root of ${input} is: ${sqroot}`);

// Date Challenges

// Create a new Date object and output its value as a string via console log
let today = new Date();
console.log(`Current Date:, ${today}.toString()`);

//Get the current year from a Date object and console log the output
let currentYear = new Date().getFullYear();
console.log(`Current Year:, ${currentYear}`);

//Create a new Date object and add 10 days to it. Print out the new date.
let current = new Date();
// Need to create current date so it has the day to add 10 to
let futureDate = new Date(current);
// sets the date as today's date then adds 10 more days to it.
futureDate.setDate(current.getDate() + 10);
console.log(`the future date is ${futureDate}`);
