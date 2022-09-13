import { writeFileSync } from "fs";

let query = [];

for (let i = 0; i < 1e7; i++) {
  query.push([getNum(1, 100), getNum(1, 100)]);
}

function getNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(query);

query = JSON.stringify(query);
