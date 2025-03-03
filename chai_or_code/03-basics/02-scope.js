let a=10
const b=7
var c=30

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
}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



//addTwo(5)
//will give error due to decleration diffrence
const addTwo = function(num){
    //variable
    return num + 2
}