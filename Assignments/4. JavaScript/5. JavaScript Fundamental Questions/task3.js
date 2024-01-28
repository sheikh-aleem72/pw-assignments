/**
 * Write a JavaScript program that demonstrates the use of character classes in regular expressions. Create a function that searches for specific character classes in a given string and returns the matches. Test the function with patterns for digits, uppercase letters, lowercase letters, and special characters.
 */

function patternMatching(str, regex) {
  const re = new RegExp(regex);
  return str.match(re);
}
let str = "This string contain all !@#$%^&*()_+ and 1234567890 ALSO uppercases";

// For digits
const forDigit = patternMatching(str, /\d/g);
console.log(`Mathes for digits in given strings are ${forDigit}`);

// For uppercase
const forUppercase = patternMatching(str, /[a-z]/g);
console.log(`Mathes for digits in given strings are ${forUppercase}`);

// For lowercase
const forLowercase = patternMatching(str, /[A-Z]/g);
console.log(`Mathes for digits in given strings are ${forLowercase}`);

// For special character
const forSpecialCharacters = patternMatching(
  str,
  /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g
);
console.log(`Mathes for digits in given strings are ${forSpecialCharacters}`);

// For word
const forWord = patternMatching(str, /\w\s/g);
console.log(`Mathes for words in given strings are ${forWord}`);
