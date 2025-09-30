let a=10
const b=7
var c=30

if(true){
    let a=44
    const b=33
    var c=14
    console.log("INNER",a)
}
console.log(a)
console.log(b)
console.log(c)

function one(){
    const username ="ayush"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website) //error
    two()
    return  { two }
}
console.log(one())
console.log(one().two())
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); error
}

// console.log(username); error


// ++++++++++++++++++ interesting ++++++++++++++++++


// -----------------------------
// Example: Function Declaration vs Function Expression
// -----------------------------

// ✅ Function Declaration
// Function declarations are fully hoisted.
// That means you can call them before their definition in the code.

console.log(addOne(5)); // Output: 6

function addOne(num) {
    return num + 1;
}


// ❌ Function Expression
// This function is assigned to a variable (const).
// Variables declared with const/let are hoisted, 
// but their assignment happens later in execution (temporal dead zone).

// So calling addTwo(5) *before* this line will throw an error.

const addTwo = function(num) {
    // This is a function stored inside a variable.
    return num + 2;
};

console.log(addTwo(5)); // Output: 7 (works fine if called after definition)


// -----------------------------
// 🔑 Summary
// -----------------------------
// 1. Function Declaration:
//    - Hoisted completely.
//    - Can be used before definition.
//    - Syntax: function name() { ... }
//
// 2. Function Expression:
//    - Variable is hoisted but not initialized with the function yet.
//    - Cannot be used before definition (throws error).
//    - Syntax: const name = function() { ... }
//
// Hoisting rule of thumb:
// - Declarations (var, let, const, function) are hoisted.
// - Assignments are not.
// -----------------------------
