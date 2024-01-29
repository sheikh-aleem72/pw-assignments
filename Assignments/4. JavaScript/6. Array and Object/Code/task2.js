/**
 * The following is an array of 10 students ages:
=> const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
- Sort the array and find the min and max age.
- Find the median age(one middle item or two middle items divided by two)
- Find the average age(all items divided by number of items)
- Find the range of the ages(max minus min)
- Compare the value of (min - average) and (max - average), use abs() method
 */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let len = ages.length;
console.log("The original array is:", ages);
// Sorting Array
ages.sort();
console.log("Sorted array:", ages);

// Finding min and max
let min = ages[0];
let max = ages[len - 1];
console.log(`Max age is ${max} and Min age is ${min}`);

// Finding median
let median = 0;
if (len % 2 === 0) {
  median = (ages[len / 2] + ages[len / 2 + 1]) / 2;
} else {
  median = ages[len / 2];
}
console.log("The median age is: ", median);

// Finding average
let sum = 0;
for (let i = 0; i < ages.length; ++i) {
  sum += ages[i];
}
let averageAge = sum / ages.length;
console.log("The average age is: ", averageAge);

// Finding range
let range = max - min;
console.log("The range is: ", range);

// Comparing minimum average and maximum average.
let minAverage = Math.abs(min / ages.length);
let maxAverage = Math.abs(max / ages.length);

if (minAverage < maxAverage) {
  console.log(
    `The maximum average ${maxAverage} is greater than the minimum average ${minAverage}!`
  );
} else {
  console.log(
    `The maximum average ${minAverage} is greater than the minimum average ${maxAverage}!`
  );
}
