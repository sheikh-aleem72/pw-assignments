/**
Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test the function with various patterns and strings.
*/

function checkForMatch(regexPattern, inputString) {
  // Creating a regular expression object with the provided pattern
  const regex = new RegExp(regexPattern);

  // Using the test() method to check for a match in the input string
  const isMatch = regex.test(inputString);

  // Returning the result
  return isMatch;
}

// Testing the function with various patterns and strings
const pattern1 = /\d+/; // Matches one or more digits
const string1 = "Hello123World";
console.log(`Pattern1 matches String1: ${checkForMatch(pattern1, string1)}`); // Output: true

const pattern2 = /^[A-Za-z]+$/; // Matches only alphabetic characters
const string2 = "Hello123World";
console.log(`Pattern2 matches String2: ${checkForMatch(pattern2, string2)}`); // Output: false

const pattern3 = /OpenAI/; // Matches the exact string "OpenAI"
const string3 = "Welcome to OpenAI's GPT-3";
console.log(`Pattern3 matches String3: ${checkForMatch(pattern3, string3)}`); // Output: true
