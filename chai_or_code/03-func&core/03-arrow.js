const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    //used to refer to current context in the object/scope
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();


const wm = user.welcomeMessage;
wm(); // called as a plain function
// ⚠️ Output (in browser):
// undefined , welcome to website
// Window {...}
// ⚠️ Output (in Node.js):
// undefined , welcome to website
// {}
// When you assign user.welcomeMessage to wm and call wm(), the function loses its original object context.


console.log(this);
//give {} in node environmet
//but will give properties of dom in browser env.

function chai() {
  let username = "ayush";
  // console.log(this);
  console.log(this.username);
}
chai();

const chai1 = function () {
  let username = "ayush";
  // console.log(this);
  console.log(this.username);
};
chai1();


//arrow function

const addTwo = (a, b) => {
  console.log(this);
  return a + b;
}

console.log(addTwo(4, 5));

const addTwo1 = (a,b) => a+b;
const addtwo2 = (a,b) => (a+b)
//can return without writing return 
//only if you use no {} or just use () or no no brackets

console.log(addTwo1(12,122));
console.log(addtwo2(12,122));

//object
const aobject = () => {username:"aks"}
//will give error due {} despite objrect data type
const aobjectc = () => ({username :"aks"})

console.log(aobjectc());
console.log(aobjectc());

let z=((a,b) => (a*b))(2,3);//6
console.log(z);
//arrow function does not have its own this
//it takes this from surrounding context