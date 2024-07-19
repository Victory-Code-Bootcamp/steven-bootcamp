//Challenge 1

// Prompt  first name
let firstName = prompt("Enter your first name:");

// length of the name
let length = firstName.length;

// Alert the user with their name and the number of letters
alert(`Your name is ${firstName} and it has ${length} letters.`);

//Challenge 2

// Prompt  favorite food
let favoriteFood = prompt("Enter your favorite food:");

// Prompt  favorite color
let favoriteColor = prompt("Enter your favorite color:");

// Combine both words and convert to uppercase
let combined = favoriteFood.concat(" " + favoriteColor).toUpperCase();

// Alert the user with the combined words in uppercase
alert(`Combined words: ${combined}`);

//Challenge 3
//String with lowercase first letter
let kateString = "hello World lets capitalize the first letter.";
//grabbing 1st letter to capitalize it
let uppercaseString = kateString[0].toUpperCase();
//adding the capital letter to the rest of the original string

let finalString = uppercaseString + kateString.slice(1);
alert(finalString);

//Challenge 4
//String with the word "JavaScript"
let maxString = "hello lets talk about JavaScript";
//check to see if the string has the word "JavaScript"
let firstOccurrence = maxString.includes("JavaScript");

console.log(firstOccurrence);
