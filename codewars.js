// Given an array of integers your solution should find the smallest integer.
// attempt 1

const args = [78, 56, 232, 12, 8];
const arr1 = [34, 15, 88, 2];
const arr2 = [34, -345, -1, 100];

arr1.sort(function (a, b) {
  return a - b;
});
arr2.sort(function (a, b) {
  return a - b;
});
console.log(`The smallest integers are ${arr1[0]}, ${arr2[0]}`);

// attempt 2

function SmallestIntegerFinder(args) {
  return Math.min(...args);
}
