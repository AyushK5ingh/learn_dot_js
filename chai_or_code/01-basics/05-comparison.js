// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

console.log("2">1)//TRUE
console.log("abc"<1)//FALSE
//(Don't compare different data types
//tyscript doesn't allow to compare 2 diffrent type of data
// - Comparing same datatypes are easy to predict 
// - Don't compare different data types
console.log(null>0)   //f
console.log(null == 0)//f
console.log(null >= 0)//t
//bcz >=(comparison) converts null to number, treating it as 0

console.log(undefined >0)
console.log(undefined ==0)
console.log(undefined <0)
//all false

// Strict equality using ===
console.log("2"===2) //f
// Neither value is implicitly converted to some other value before being compared

//always priotize clean code