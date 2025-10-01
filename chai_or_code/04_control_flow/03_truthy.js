const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// A falsy value is a value that becomes false when converted to a Boolean
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values
// A truthy value is anything not in the falsy list.
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

true ? console.log("true") : console.log("false")

const age = 17
const canDrive = age >= 18 ? "can drive" : "cannot drive"
console.log(canDrive);