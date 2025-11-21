"HEY"+"WORLD";
const name = "ayush"
const repoCount= 50

console.log(name + repoCount + "Value");
//outdated and not recomended

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)
//use back bricks(`) below escape
console.log(`my name is ${name}`)
const gameName = new String("red dead")
//string methods can be found though the use of console in inspect
//by using
/* const nam =new String("hello test")
    nam
    */
console.log(gameName[0])
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('d'))

const sub1=gameName.substring(0,4);//from i to j-1
//If start > end, it swaps them. & no neg
console.log(sub1)
const sub2=gameName.slice(-8,4)//can use negative value
//negative value starts from -1 

const spaces ="    ayuhs   "
console.log(spaces.trim())//removes spaces

const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'))

console.log(url.split('/'))
