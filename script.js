//alert("Hello, world")

console.log("howdy, world!");

let myName; // variable declaration

myName = "Dwayne The Rock Johnson"; // variable assignment

console.log(myName);

let firstName = "Dwayne";
let lastName = "Johnson";

// There are a couple different ways to combine strings. These two examples produce the same result:

// Option A: String Concatenation with the + symbol
let fullName = firstName + " " + lastName;

// Option B: String template literals (probably easier once you get used to them)
fullName = `${firstName} ${lastName}`;

// LIGHTNING EXERCISE
// In your JavaScript file, declare and assign the following variables with information about yourself:
// firstName should hold a string of your first name
// lastName should hold a string of your last name
// age should hold a number of your age
// likesTravel should hold a boolean representing whether or not you like to travel
// Log each variable to the console.

firstName = "Vincent";
lastName = "OLeary";
let age = 25;
let likesTravel = false;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(likesTravel);

// PRACTICE
// In your JavaScript file, instantiate and assign the following variables with information about the current weather:
// temperature should hold a number representing the current temperature in Fahrenheit
// conditions should hold a string about the current weather conditions (i.e. "cloudy", "sunny", etc).
// sunriseTime should hold a string representing what time the sun rose this morning
// sunsetTime should hold a string representing what time the sun will set this evening
// Log each variable to the console.
// Use string template literals to combine these variables into a sentence about the weather. (Example: "It's currently sunny and 55 degrees. The sun rose this morning at 7:34 AM and will set at 5:09 PM.")

let temperature = 35;
let conditions = "cloudy";
let sunriseTime = "5:45 AM";
let sunsetTime = "6:13 PM";

console.log(temperature);
console.log(conditions);
console.log(sunriseTime);
console.log(sunsetTime);

console.log("It's currently "+conditions+" and "+temperature+". The sun rose this morning at "+sunriseTime+".");

