/*
Write a JavaScript function called curry that takes a function as an argument and returns a curried version of that function. The curried function should accept arguments one at a time and return a new function until all arguments are provided. Then, it should execute the original function with all arguments. Test the curry function with a function that adds two numbers.
*/

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      };
    }
  };
}

// Test the curry function with a function that adds two numbers
function add(x, y) {
  return x + y;
}

const curriedAdd = curry(add);

console.log(curriedAdd(2)(6));
console.log(curriedAdd(2, 3));
console.log(curriedAdd(2, 7, 3));
