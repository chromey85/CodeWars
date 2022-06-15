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

// DNA to RNA Conversion
// Create a function which translates a given DNA string into RNA
// For example:
// "GCAT"  =>  "GCAU"

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

//A Needle in the Haystack
// Create a function that takes a string and returns the number of times the word "needle" appears in the string.

let haystack = [
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
];

function findNeedle(haystack) {
  if (haystack.includes("needle")) {
    return "found the needle at position " + haystack.indexOf("needle");
  } else {
    return " needle is not in the haystack";
  }
}
console.log(findNeedle(haystack));

// Grasshopper - Personalized Message
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

let name = "Yusuf";
let owner = "Yusuf";

function greet(name, owner) {
  if (name == owner) {
    return "Hello Boss";
  } else {
    return "Hello Guest";
  }
}

console.log(greet(name, owner));

// Remove String Spaces
// Create a function that takes a string and returns the string without spaces.

let x =
  "kjsbdvkjsdf sdkjvnhksjdn sdfnbkj;sdnfv  k;jsdvjsdf SDFKJ;Nsdkf SDKFJNskdjf";
function noSpace(x) {
  return x.replace(/\s/g, "");
}
console.log(noSpace(x));

// Century From Year
// Given a year, return the century it is in.

function century(year) {
  // // Attempt 1
  // if (year.length < 100) {
  //   return 1;
  // } else if (lastTwo > 00) {
  //   return Math.round(year / 100) + 1;
  // } else {
  //   return Math.round(year / 100);
  // }
  // // Attempt 2
  // let lastTwo = String(year).slice(-2);
  // // console.log(lastTwo);
  // return year < 100
  //   ? 1
  //   : lastTwo > 00
  //   ? Math.round(year / 100) + 1
  //   : Math.round(year / 100);
  // // Attempt 3
  // if (year % 100 === 0) {
  //   return year / 100;
  // } else {
  //   return Math.floor(year / 100) + 1;
  // }
  // // Attempt 4
  // return Math.floor(
  //   +Math.max(100, +year) / 100 + (+("" + year).substring(2, 4) > 1)
  // );
  // // Example 1
  return Math.ceil(year / 100);
}
console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(806886));
console.log(century(2000));
console.log(century(89));

console.log(`It is ${806886 / 100}`);
console.log(`Math.floor is ${Math.floor(806886 / 100)}`);
console.log(`Math.max is ${Math.max(806886 / 100)}`);

// List Filtering
// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filtered_list(l) {
  return l.filter((x) => typeof x === "number");
}

console.log(filtered_list([1, 2, "a", "b"]));
console.log(filtered_list([1, "a", "b", 0, 15]));
console.log(filtered_list([1, 2, "aasf", "1", "123", 123]));

// Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet("Yusuf"));

// Find the first non-consecutive number

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) return arr[i];
  }
  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
console.log(firstNonConsecutive([-5, -4, -3, -2, -1, 0, 1, 2]));

// If you can't sleep, just count sheep!!
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

console.log(countSheep(3));
console.log(countSheep(5));
