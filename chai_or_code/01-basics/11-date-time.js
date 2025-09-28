let myDate =new Date();
//stores as object and store timestamp in readable format
console.log(myDate)//numerical format
console.log(myDate.toString())//understandable
console.log(myDate.toDateString())//displays date only
console.log(myDate.toLocaleString())//displays time 
console.log(myDate.getMonth()+1);
console.log(myDate.getDay());//day of the mounth
console.log(typeof myDate);

let myCreatedDate =new Date(2023,0,23,15,3)//mounth start from 0
//let myCreatedDate =new Date(2023-01-23)//starts from 01
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())


let myTimeStamp= Date.now()
//store timestemp in number format
//stores and compare timestamps
//stores time from unix epoch (1 jan 1970 Jan 1, 1970, 00:00:00 UTC)
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))
//Date.now() → current timestamp in milliseconds.
//Dividing by 1000 → converts it to seconds.
//Math.floor(...) → removes the decimal part (rounds down).

let newDate=new Date();
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "UTC"
})
//alows formating of the date
//allows to get into realy detailed