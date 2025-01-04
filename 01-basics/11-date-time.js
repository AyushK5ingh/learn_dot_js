let myDate =new Date();
console.log(myDate)//not understandale
console.log(myDate.toString())//understandable
console.log(myDate.toDateString())//displays date only
console.log(myDate.toLocaleString())//displays time only
console.log(myDate.getMonth()+1);
console.log(myDate.getDay());
console.log(typeof myDate);

let myCreatedDate =new Date(2023,0,23,15,3)//mounth start from 0
//let myCreatedDate =new Date(2023-01-23)//starts from 01
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())


let myTimeStamp= Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate.getMonth)

newDate.toLocaleString('default', {
    weekday: "long",
    
})//allows to get into realy detailed