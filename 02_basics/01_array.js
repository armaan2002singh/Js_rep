//arrays

const myarr = [1, 2, 4, 5, 6, 7]; //array is collection of multiple elements
const myheros = ["spiderman", "ironman"]
const myarr2 = []
// console.log(myarr[0]);
// console.log(myarr.length);

// myarr.push(9) // 9 is added
// myarr.pop(); // 9 is removed
//console.log(myarr);

//myarr.unshift(7); 
/*[
    7, 1, 2, 4,
    5, 6, 7
  ] */

//myarr.shift() //[ 2, 4, 5, 6, 7 ]

// console.log(myarr.includes(2));

// console.log(myarr.indexOf(3)); // -1 because not exists

// const newarr = myarr.join()
// console.log(typeof myarr); // was object

// console.log(typeof newarr); //changed to string

//.....................slice or splice

console.log("A", myarr);

const myn1 = myarr.slice(1,3);
console.log(myn1);
console.log("B", myarr);


const myn2 = myarr.splice(1,3);
console.log("c",myarr); // splice manipulated the array..

console.log(myn2);


