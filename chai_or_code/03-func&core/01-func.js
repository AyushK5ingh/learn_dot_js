function sayMyName(){
    console.log("a")
    console.log("y")
    console.log("u")
    console.log("s")
    console.log("h")
}

sayMyName()

function add2nums(n1,n2){
    console.log(n1+n2)
}

add2nums(3,5)
add2nums(3,"a")

function add2num(n1,n2){
    return n1+n2
}
// But in JavaScript, function declarations are hoisted (they move to the top of their scope).
// If multiple functions with the same name exist, the last one wins.

const sum =add2num(3,5)
console.log(`result : ${sum}`)

function logInUserMess(username="sam")
//provide default vaue using =
{   if(!username)//username==undefined
    {
        console.log("no usernames")
        return
    }
    return `${username} just logged in`
}

console.log(logInUserMess("ayush"))


//rest operater
//depending on the use case the function is defined
function calculateCartPrice(s1,s2 ,...n1)
//a func to accept an indefinite no of arguments as array
{
    return n1
}

console.log(calculateCartPrice(200,400,500,2000))

const user={
    username:"ayush",
    price:10000
}

function handObject(anyObject){
    console.log(`username is ${anyObject.username} and its price is ${anyObject.price}`)
    //if any value cant be foud it will return undefined
}

handObject(user)
//or
handObject({
    username:"sam",
    price: 399
})

const myNewArray= [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,100,300,500]))

