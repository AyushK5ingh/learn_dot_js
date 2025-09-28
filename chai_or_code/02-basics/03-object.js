//singleton
//object made through constructor method is singelton
// Object.create
//const tinderUser =new Object();

//object literals
//no singelton created with literal method

const mySym= Symbol("key1")
const JsUser = {
    name:"ayush",
    "fname":"ayushksingh",
    age:"21",
    location:"dead",
    [mySym]:"myKey1",//use[] to use symbol as key
    email:"ayushkumamr@gmail.com",
    isLoggedin:false,
    lastLoginDays:["mon","saturday"]
}

console.log(JsUser.name);
console.log(JsUser["email"])
console.log(JsUser["fname"])
console.log(JsUser[mySym])


JsUser.email="ayushksing@gmail.com"

// Object.freeze(JsUser);

// //post freeze changes wont occur
//but will not give error when tried changed simply rejected
JsUser.email="ayush90@gmail.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("hey,js");
}
JsUser.greetingTwo = function(){
    console.log(`hey,js ${this.name}`);
    //this allows us to refernce to the object(properties within it
}
// this is crucial here—it links the method to the object’s own properties.

console.log(JsUser.greeting)
//will give reference of the function
console.log(JsUser.greeting())
//execute function
console.log(JsUser.greetingTwo())

// in all the above cases greeting and greetingTwo doesnot return anyhting
// so it prints undefined
JsUser.greeting();
JsUser.greetingTwo()