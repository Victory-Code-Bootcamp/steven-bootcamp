// Challenge 1: Array Spread
// Combine two arrays into a single array using the spread operator.
const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];

const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);
// Challenge 2: Object Spread
// Create a new object by merging multiple objects using the spread operator.
const person = {
  name: "steven",
  age: 32,
};
const car = {
  make: "Toyota",
  year: 1981,
};

const objects = { ...person, ...car };

console.log(objects);

// Challenge 3: Array Rest
// Create a function that accepts a variable number of arguments and uses the rest operator to gather them into an array.
const test = (...newArr) => {
  return newArr;
};
console.log(test("a", "b", 1, 2));
// Challenge 5: Array Destructuring
// Extract individual elements from an array using array destructuring.
const numbers = [1, 2, 3, 4, 5];

// Destructuring the array
const [first, second, third] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3

// Challenge 6: Object Destructuring
// Extract specific properties from an object using object destructuring.
const person2 = {
  name: "Steven",
  age: 32,
  city: "Vancouver",
};

// Destructuring assignment
const { name, age, city } = person2;

console.log(name);
console.log(age);
console.log(city);

// Challenge 7: Destructuring with Default Values
// Use destructuring to assign default values to variables when extracting from an array or object.
const car2 = {
  make: "Jeep",
  model1: "Wrangler",
};

// Destructuring assignment with default value and renaming
const { make, model1, year = "Unknown", model1: remod } = car2;

console.log(make);
console.log(model1);
console.log(year);
console.log(remod);
// Challenge 8: Destructuring Function Parameters
// Create a function that accepts an object as a parameter and uses destructuring to extract specific properties.
const testFunction = (obj) => {
  const { make, name, year } = obj;

  return `${make} /n ${name} /n ${year}`;
};

const vehicle = {
  make: "Jeep",
  name: "daily driver",
  color: "grey",
};
console.log(testFunction(vehicle));
