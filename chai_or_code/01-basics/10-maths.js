//lots of function maths can used by using inspect 
//type console.log(Math)

console.log(Math);
console.log(Math.abs(-8));//-ve to +ve
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.7));
console.log(Math.sqrt(4));
console.log(Math.min(3,6,4,8));//also max exist
console.log(Math.max(3,6,4,8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10+1))

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//will give number between min and max
