// for in
// Iterates over keys (indexes or property names).
// Works best for objects.
// With arrays, it gives you the index (not the value).

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
// for in loop
// it works on keys of object
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key + " " + programming[key]);
}

// map is not iterable
// but we can convert map to array of arrays using Array.from(map)
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
//not iterable
for (const key in map) {
    console.log(key);
}