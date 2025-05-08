// destructuring of objects.

const course = {
    coursename :"js in hindi",
    price : "999",
    courseinstructor : "Armaan"
}

//course.courseinstructor

const {courseinstructor: instructor} = course // here the value is extracted from the course object. Her we can also change the name of the key which is extracted from the object.

//console.log(courseinstructor);
console.log(instructor);

//................API..........................
//JSON.........................................
// {
//     "name":"Armaan",
//     "coursename":"js in hindi",
//     "price":"free"
// } in JSON keys are also string and values are as well

// Second form of API's where number of objects are present in one Array. 
// [
//     {},
//     {}
// ]


/* JSON formatter "https://jsonformatter.org/" 
is a tool used to understand this Array format API's which are quite difficult to analyse */