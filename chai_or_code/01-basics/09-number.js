const score =400
//automaticaly makes it a number
console.log(score)

const balance = new Number(100)
//forcefully a number
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2));
//used in ecomerce website to not show irrelevantly long detaile to the user

const otherNumber = 23.889;

console.log(otherNumber.toPrecision(3));
//rounds of there digits

const hundred=1000000;
console.log(hundred.toLocaleString('en-IN'))

//more mothods can be found same way as string

//MAX_INTEGER, MIN_INTEGER, MAX_SAFE_INTEGER