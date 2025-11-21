//Immediately Invoked Function Expression (IIFE)
//A function that runs as soon as it is defined
//global scope pollution se bachata hai

(function(){
    console.log("IIFE");
    let username = "ayush";
    console.log(username);
})();

// ; ends the context of the iife funtion
// ; to avoid errors in case of concatenation of multiple js files without semicolon
// console.log(username); //error, as username is not defined in global scope

//arrow function IIFE
( ()=>{
    console.log("IIFE arrow function");
})();

//IIFE with parameters
((name)=>{
    console.log("IIFE with parameter "+ name);
})("ayush");
