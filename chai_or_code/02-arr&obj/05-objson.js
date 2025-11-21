//destructuring
const course ={
    coursename:"js one",
    price:"999",
    courseInstructor:"Hitesh"
}
const {courseInstructor} =course
console.log(courseInstructor)

const {price:MRP}= course
console.log(MRP)

//console.log(price) will give errorbcz of :MRP

//learn obj destructring

//JSON FORMAT BELOW
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
//     "SITE_ADMIN": false
// }

//api format can also be like array
// [
//     {},
//     {},
//     {}
// ]

// json formater to format api