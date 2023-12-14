// Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.

function calculateTax() {
  return function generateTax(income) {
    let taxAmount = 0;
    if (income <= 10000) {
      taxAmount += income * 0.1;
    } else if (income <= 30000) {
      taxAmount += income * 0.15;
    } else if (income <= 70000) {
      taxAmount += income * 0.2;
    } else {
      taxAmount += income * 0.25;
    }
    return taxAmount;
  };
}

let taxGenerator = calculateTax();

console.log(`Tax for amount 10000 is ${taxGenerator(10000)}`);
console.log(`Tax for amount 30000 is ${taxGenerator(30000)}`);
console.log(`Tax for amount 70000 is ${taxGenerator(70000)}`);
