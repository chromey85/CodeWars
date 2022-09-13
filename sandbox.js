const content = await fs.readFile("./data.json");

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
// var number = function (busStops) {
//   let passengers = 0;
//   for (let i = 0; i < busStops.length; i++) {
//     passengers += parseInt(number[i]);
//     busStops.toString();
//     return busStops;
//   }
// };

// var number = function (busStops) {
//   let passengers = 0;
//   for (let i = 0; i < busStops.length; i++) {
//     passengers += busStops[i][0] - busStops[i][1];
//   }
//   return passengers;
// };

// fs = require(`fs`);
// fs.readFile(`./data.json`, (`err`, data));
// {
//   if (err) {
//     console.log("something went wrong");
//   }
//   console.log(data);
// }

// fetch("./data.json")
//   .then(function (resp) {
//     return resp.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

function number(busStops) {
  let subs = busStops.map((stop) => stop[0] - stop[1]);
  return subs.reduce((acc, elem) => acc + elem, 0);
}

console.log(number(JSON.parse(content)));

// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ])
// );
// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
//   ])
// );
// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 8],
//     [12, 2],
//     [6, 1],
//     [7, 8],
//   ])
// );
// console.log(number([[0, 0]]));
