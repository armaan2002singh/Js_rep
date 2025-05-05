// dates
let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate); // is an object

// let mycreateddate = new Date(2023,0,23)
//let mycreateddate = new Date(2023, 0, 23, 5, 3); //1/23/2023, 5:03:00 AM
//console.log(mycreateddate.toDateString());
//console.log(mycreateddate.toLocaleString());

let mycreateddate = new Date("01-14-2923");
//console.log(mycreateddate.toLocaleString());

let mytimestamp = Date.now()

// console.log(mytimestamp);
// console.log(mycreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date();
console.log(newdate);
console.log(newdate.getDay()); // many options same as this

// newdate.toLocaleString('default',{
//     weekday:'long',
// })