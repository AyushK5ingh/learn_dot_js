// for of
// Iterates over values directly.
// Works best for arrays, strings, Maps, Sets.
// ❌ Doesn’t work on plain objects (unless you use Object.keys/values/entries).

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

console.log(map);

for (const [key, value] of map) {
  console.log(key, "=", value);
}
console.log("----");
for (const key of map) {
  console.log(key);
  console.log(key[0], "=>", key[1]);
}
const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};
//not warking

// for (const [key, value] of myObject) {
//     console.log(key, '=', value);

// }
console.log("----");
for (const [key, value] of Object.entries(myObject)) {
  console.log(key, "=", value);
}
console.log("----");
for (const key in myObject) {
  console.log(key, "=", myObject[key]);
}
console.log("----");
// Keys
for (const key of Object.keys(myObject)) {
  console.log(key);
}

// Values
for (const value of Object.values(myObject)) {
  console.log(value);
}
