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
  let lastTwo = String(year).slice(-2);
  // console.log(lastTwo);
  return year < 100
    ? 1
    : lastTwo > 00
    ? Math.round(year / 100) + 1
    : Math.round(year / 100);
  // if (year.length < 100) {
  //   return 1;
  // } else if (lastTwo > 00) {
  //   return Math.round(year / 100) + 1;
  // } else {
  //   return Math.round(year / 100);
  // }
  // if (year % 100 === 0) {
  //   return year / 100;
  // } else {
  //   return Math.floor(year / 100) + 1;
  // }
}
console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(89));
