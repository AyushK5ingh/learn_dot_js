//parenthesis ()
//bracket []
//curly brackets {}

const myArr = [0,1,2,3,4,5];
const myHero =["shasktiman","superman","batman"]
//unlike other language array can be mix of diff data types
//upon copy operation it shares shallow copy (properties shares same reference point)
//not deep copy

const myArr2=new Array(2,2,2,3,4)
//method similar to number and string can be found through console inspect

console.log(myHero)
console.log(myHero[1]);

//Array Methods

myArr.push(69)
myArr.push(7)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(20)
//appends to start
//not optimized

myArr.shift()
//deletes at the top
//also not optimized
//similar to push and pop
//it just happens at the start

console.log(myArr.includes(2))//is present or not
console.log(myArr.indexOf(2))//index of the elemt in the array

const newArr=myArr.join()
//adds all the element of the arr into strings(comma seprated)
console.log(newArr)

//slice,splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
//slice is inclusive in the end unlike splic
//which is exclusive in the start as well as end both

//splice delete the elements extracted from the orignal array unlike slice
//which leaves the array untouched