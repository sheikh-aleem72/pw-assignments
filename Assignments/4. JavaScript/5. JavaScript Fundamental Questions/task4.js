/**
 * Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not only checks if there is a match but also extracts specific parts of the matched text using groups. Test the function with patterns that include groups to capture different parts of a date (e.g., day, month, and year) from a given string.
 */

function checkRegex(str, pattern) {
  const regex = new RegExp(pattern);
  let match = str.match(regex);

  if (match) {
    let [, day, month, year] = match;
    return {
      success: true,
      day,
      month,
      year,
    };
  } else {
    return {
      success: false,
      message: "No match found",
    };
  }
}

let str = "Date: 24-10-2024";
let pattern = /Date: (\d{2})-(\d{2})-(\d{4})/;
const result = checkRegex(str, pattern);
console.log(result);
