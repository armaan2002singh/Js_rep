// if 

// if (condition "which should be true then it will run the further code."){
//     //scope
// }

//will do comparison and conditions in parentheses. //  where === also checks the data type as well. shown in example no. 2
const isUserLoggedin = true;
if (isUserLoggedin) {
    console.log("hy men");// will print it
    
}

//example no. 2 -->
// if (2==="2") {
//     console.log("hey!");
//     // will not execute because the datatype of the both "2" is different.
// }

// const temperature = 41;
// if (temperature < 50) {
//     console.log("yes it is ");
//     // will print 
// }

// use of else -->
const temperature = 51;
if (temperature < 50) {
    //console.log("yes it is ");
    // will print 
}
else{
    //console.log("not less then 50");
    // will be printed because if's condition is not true.
}

const score = 200;
if (score > 100) {
    const power = "fly ";
    //console.log(`user power ${power}`);
}
// console.log(`user power ${power}`); will not work because the scope of the variable "power is inside the if{block}"


//....................short hand notation......
const balance = 1000;
//if (balance > 500)// console.log("test"),//  successfully executed.
//console.log("untested");
 // cannot write moer then one line,but some people do by using commas, which reduce the code readability.

 //......................nesting...............
//  if (balance < 500) {
//     console.log("less then 500");
    
//     if (balance < 750) {
//         console.log("less than 750");
//         if (balance< 900) {
//             console.log("less than 900");
//         }
//     }
//  }
//  else {
//    // console.log("less than 1200");
    
//  }

 //.............................advance..............

 const userloggedin = true
 const debitcard =  true
 const loggedinfromgoogle = false
 const loggedinfromemail = true

 if (userloggedin && debitcard && 2==2) { //&& -> both statement should be true. "AND"
    console.log("Allow to log in");  
 }

 if (loggedinfromgoogle || loggedinfromemail) { // "||" is used to check multiple conditions. "OR"
    console.log("User logged in ");
    // futher it will be used for conditional rendering.
 }