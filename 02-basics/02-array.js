const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
//push whole array in the other array
console.log(marvel_heros)
console.log(marvel_heros[3][1])

const allHeros = marvel_heros.concat(dc_heros)
//properly extrats the array and merges into one
console.log(allHeros);

//best methods
const all_new_heros=[...marvel_heros,...dc_heros]
//just like name spread
//it seperateds the array into seperate element and combines it into one
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another=another_array.flat(Infinity)
//it remove nested array with the depth in the bracket
console.log(real_another)

console.log(Array.isArray("Hitesh"))
//checks whether it is array or not
console.log(Array.from("Hitesh"))
//converts into array
console.log(Array.from({name:"Ayush"}))//interesting
//gets confused which value to convert to array 
//key or the value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));