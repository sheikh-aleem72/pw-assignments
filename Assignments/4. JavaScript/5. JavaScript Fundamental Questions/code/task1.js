/**
 * Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function. The inner function should access both the parameter of outerFunction and a variable declared within outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these variables even after outerFunction has finished executing.
 */
function outerFunction(para1, para2) {
  let g = para1 + para2;
  return () => {
    return g + 5;
  };
}
let innerFunction = outerFunction(2, 3);
let res = innerFunction();
console.log(res);
