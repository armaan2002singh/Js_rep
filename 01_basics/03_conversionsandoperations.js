//let score = "33abc";
//let score = null //it was 0 in result
// let score = undefined was NaN
//let score = true got 1
// let score = "armaan" got NaN again
//console.log(typeof score);
//console.log(typeof (score)); // in form of method


/*let valueinnumber = Number(score);
console.log(typeof valueinnumber)
console.log(valueinnumber);*/

//"33" easly converted into number
//"33abc" it converted into NaN
// true = 1, false = 0

//let isloggedin = 1; //true , false = 0
//let isloggedin = ""; // false
//let isloggedin = "armaan"; //true
//let booleanisloggedin = Boolean(isloggedin);

//console.log(booleanisloggedin);

//let somenumber = 33
//let stringnumber = String(somenumber);
//console.log(somenumber); //number is showing but changed into number 
//console.log(typeof stringnumber); // showing the string type


//............... operations................................

let value = 3
let negvalue = -value
//console.log(negvalue); // will show the -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1 = "hello"
let str2 = " armaan"

let str3 = str1 + str2 ;
console.log(str3); //hello armaan result 

console.log("1" + 2); //12
console.log(1+"2"); //12
console.log("1"+"2") //12
console.log("1"+2+2); // 122
console.log(1+2+"2"); // 32 

// unpper results are because of priority or perferredType  
// ECMA script point number 7
// this type of codes are not preferred in cooperats
// console.log(true); // true
// console.log(+true); // 1
// console.log(+""); //0

//upper things are used to make code tricky or for nothing else
let num1, num2, num3;
num1 = num2 = num3 = 2+2;
console.table({ num1, num2, num3 }); // result will be 4 in all

// let gamecounter = 100;
// gamecounter ++;
// console.log(gamecounter);  //101


// let gamecounter = 100;
// ++gamecounter ;
// console.log(gamecounter);  // again 101

/* prefix and postfix
prefix usually increments the value before and in the case of postfix value increments after the usage
*can study it from MDMN documents*
*/ 


//for conversion topic ECMA