// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}`);
    };
}

// Create multiple objects
const person1 = new Person("Ayush", 25);
const person2 = new Person("Ravi", 30);

person1.greet(); // Hello, my name is Ayush
person2.greet(); // Hello, my name is Ravi

//good fro creating constructor pbejct

const tinderUser =new Object()


tinderUser.id = "123abc"
tinderUser.name = "Aks"
tinderUser.isLoggedIn = false
tinderUser.named = function(gg){
    this.name=gg;
console.log(`my name is ${this.name}`)
}
// this is crucial here—it links the method to the object’s own properties.

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname);
//here the "?" check if fullname exist then it will move forward
//if doesnot exist will print undefined


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }
console.log(obj3);

const obj5 = Object.assign({}, obj1, obj2, obj4)
console.log(obj5);
//{} aloow to put all the value of obj1 obj2 & obj3 go to {} 
//else all the values goes to obj1
//copies enumerable object from the 
//imp abv & belw

const obj6 = {...obj1, ...obj2}
console.log(obj6);

//spread


const users = [
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 1,
        email: "h2@gmail.com"
    },
    {
        id: 1,
        email: "h3@gmail.com"
    },
]

users[1].email//like array


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
//get all keys, vzalues . entries

tinderUser.named("aps");

console.log(tinderUser.hasOwnProperty('named'));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//checks whether it is present in the obj or not