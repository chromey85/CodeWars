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

console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("GACCGCCGCC"));
console.log(DNAtoRNA("GATTCCACCGACTTCCCAAGTACCGGAAGCGCGACCAACTCGCACAGC"));
console.log(DNAtoRNA("CACGACATACGGAGCAGCGCACGGTTAGTACAGCTGTCGGTGAACTCCATGACA"));
console.log(DNAtoRNA("CACGACATACGGAGCAGCGCACGGTTAGTACAGCTGTCGGTGAACTCCATGACA"));
console.log(DNAtoRNA("AACCCTGTCCACCAGTAACGTAGGCCGACGGGAAAAATAAACGATCTGTCAATG"));
console.log(
  DNAtoRNA(
    "GAAGCTTATCCGTTCCTGAAGGCTGTGGCATCCTCTAAATCAGACTTGGCTACGCCGTTAGCCGAGGGCTTAGCGTTGAGTGTCATTATATACGCGGCCTGCGACCTGGCCACACAATGCCCTCGAAAATTTTTCTTTCGGTTATACGAGTTGCGAAACCTTTCGCGCGTAGACGAAGAATTTGAAGTGGCCTACACCGTTTGGAAAGCCGTTCTCATTAGAATGGTACCGACTACTCGGCTCGGAGTCATTGTATAGGGAGAGTGTCGTATCAACATCACACACTTTTAGCATTTAAGGTCCATGGCCGTTGACAGGTACCGA"
  )
);

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

function greet1(name, owner) {
  if (name == owner) {
    return "Hello Boss";
  } else {
    return "Hello Guest";
  }
}

console.log(greet1(name, owner));

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

// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number % 2 === 0) {
    // % means look at the value of the remainder or the number after the decimal place
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(even_or_odd(2));
console.log(even_or_odd(5));
console.log(even_or_odd(-13));

// The highest profit wins!
// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 6, 7, 8]));
console.log(minMax([-5, -4, -3, -2, -1, 0, 1, 2]));

// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  // if (str.length === 0) {
  //   return true;
  // } else {
  //   let strArr = str.toLowerCase().split("");
  //   let unique = [...new Set(strArr)];
  //   return unique.length === strArr.length;
  // }
  return new Set(str.toLowerCase().split("")).size === str.length;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram(""));

// Grasshopper - Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade(s1, s2, s3) {
  let ave = (s1 + s2 + s3) / 3;
  if (ave >= 90) {
    return "A";
  } else if (ave >= 80 && ave < 90) {
    return "B";
  } else if (ave >= 70 && ave < 80) {
    return "C";
  } else if (ave >= 60 && ave < 70) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(84, 79, 85));
console.log(getGrade(75, 70, 79));
console.log(getGrade(66, 62, 68));
console.log(getGrade(48, 55, 52));

// Growth of a Population
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
  for (let i = 0; p0 < p; i++) {
    console.log(p0);
    p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
    if (p0 >= p) {
      return i + 1;
    }
  }
}

// console.log(nbYear(1500, 5, 100, 5000));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1000, 2, 50, 1214));

// Return the number (count) of vowels in the given string.

function getCount(str) {
  let str1 = str.match(/[aeiou]/g);
  return str1?.length || 0;
}

console.log(`There are ${getCount("abracadabra")} vowels`);
console.log(`There are ${getCount("pear tree")} vowels`);
console.log(
  `There are ${getCount("o a kak ushakov lil vo kashu kakao")} vowels`
);
console.log(`There are ${getCount("my pyx")} vowels`);

// MakeUpperCase

function makeUpperCase(str) {
  return str.toUpperCase();
}

console.log(`Stop shouting ${makeUpperCase("hello")}`);

// Convert a string to an array

function stringToArray(string) {
  return string.split(" ");
}

console.log(stringToArray("Robin Singh"));
console.log(stringToArray("I love arrays they are my favorite"));

// Thinkful - Logic Drills: Traffic light

function updateLight(current) {
  let lights = ["Red", "Yellow", "Green"];
  // return lights.indexOf(current)
  //   ? "That colour is not part of the traffic lights"
  //   : lights.indexOf(current) === lights.length - 1
  //   ? lights[lights.indexOf(current) - 1]
  //   : lights[lights.indexOf(current) + 1];
  if (current == "Red") {
    return "Yellow";
  } else if (current == "Yellow") return "Green";
  else if (current == "Green") return "Yellow";
  else {
    return "That colour is not part of the traffic lights";
  }
}

console.log(updateLight("Red"));
console.log(updateLight("Yellow"));
console.log(updateLight("Green"));
console.log(updateLight("Purple"));

// Find the next perfect square!

function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq)) > 0
    ? (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1)
    : -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(319225));
console.log(findNextSquare(15241383936));
console.log(findNextSquare(155));
console.log(findNextSquare(342786627));

// Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));

// Number of People in the Bus

import { readFileSync } from "fs";
import { parse } from "path";

let content = readFileSync("./data.json");

let jsoned = JSON.parse(content);

// // Solution 1
// var number = function (busStops) {
//   let newBusStops = [];
//   for (let i = 0; i < busStops.length; i++) {
//     newBusStops = newBusStops.concat(busStops[i]);
//   }
//   //   return newBusStops;
//   let passengers = 0;
//   for (let i = 0; i < newBusStops.length; i++) {
//     i % 2 ? (passengers -= newBusStops[i]) : (passengers += newBusStops[i]);
//   }
//   return passengers;
// };

// Solution 2
var number = function (busStops) {
  let passengers = 0;
  for (let i = 0; i < busStops.length; i++) {
    passengers += busStops[i][0] - busStops[i][1];
  }
  return passengers;
};

// function number(busStops) {
//   let subs = busStops.map((stop) => stop[0] - stop[1]);
//   return subs.reduce((acc, elem) => acc + elem, 0);
// }

console.log(number(jsoned)); // used for importing data from json file

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ])
);
console.log(number([[0, 0]]));

// Basic Mathematical Operations

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));

// Remove exclamation marks

function removeExclamationMarks(s) {
  return (s = s.split("!").join(``));
}

console.log(removeExclamationMarks("Hello World!"));
console.log(removeExclamationMarks("Hello World!!"));
console.log(
  removeExclamationMarks("vjmJQXtykQ!FSVfPDmlkQ xAbxfRBZdx!qIIDBgsUuK")
);

// Opposites Attract

function lovefunc(flower1, flower2) {
  return flower1 % 2 == 0 && flower2 % 2 == 0
    ? false
    : flower1 % 2 !== 0 && flower2 % 2 !== 0
    ? false
    : true;
}

console.log(lovefunc(1, 4));
console.log(lovefunc(2, 2));
console.log(lovefunc(0, 1));
console.log(lovefunc(0, 0));
console.log(lovefunc(957, 613));
console.log(lovefunc(7, 3));

// Grasshopper - Summation

var summation = function (num) {
  let arr = [];
  let start = 0;
  while (start < num + 1) {
    arr.push(start++);
  }
  let sum = arr.reduce(function (a, b) {
    return a + b;
  }, 0);
  return sum;
};

console.log(summation(1));
console.log(summation(8));

// Sentence Smash

function smash(words) {
  return words.length == 0 ? "" : words.toString().split(",").join(" ");
}

console.log(smash([]));
console.log(smash(["hello"]));
console.log(smash(["hello", "world"]));
console.log(smash(["hello", "amazing", "world"]));
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));

// Complementary DNA

function DNAStrand(dna) {
  dna = dna.split("");
  for (let i = 0; i < dna.length; i++) {
    dna[i] === "A"
      ? (dna[i] = "T")
      : dna[i] === "T"
      ? (dna[i] = "A")
      : dna[i] === "C"
      ? (dna[i] = "G")
      : dna[i] === "G"
      ? (dna[i] = "C")
      : "There is no DNA";
  }
  return dna.join("");
  //     .replace("A", "T")
  //     .replace("T", "A")
  //     .replace("C", "G")
  //     .replace("G", "C");
}

console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));

// Remove the minimum

function removeSmallest(numbers) {
  let min = Math.min(...numbers);
  // return numbers.pop(Math.min(...numbers));
  // let newNum = numbers.filter(min);
  // return newNum;
  let minIndex = numbers.indexOf(min);
  return numbers.filter((_, i) => i !== minIndex);
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([]));

// Money, Money, Money

function calculateYears(principal, interest, tax, desired) {
  // let earnedInterest = principal * interest;
  // console.log(`earnedInterest = ${earnedInterest}`);
  // let taxed = earnedInterest * tax;
  // console.log(`taxed = ${taxed}`);
  // let year = earnedInterest - taxed + principal;
  // console.log(`year = ${year}`);
  // let arr = [year];
  // console.log(`arr = ${arr}`);

  // let year1 = principal * interest - principal * interest * tax + principal;
  // console.log(`year1 = ${year1}`);
  // let arr = [year1];
  // console.log(`arr = ${arr}`);

  // if ((year1 = desired)) {
  //   return 0;
  // } else if (year1 >= desired) {
  //   for (let i = 0; i <= year1; i++) {
  //     arr.push(year1 * interest - principal * interest * tax + principal);
  //   }
  // } else {
  //   return arr.length;
  // }
  let year = 0;
  while (principal < desired) {
    year++;
    principal = principal + (principal * interest - principal * interest * tax);
  }
  return year;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
console.log(calculateYears(1000, 0.01625, 0.18, 1200));
console.log(calculateYears(1000, 0.05, 0.18, 1000));
