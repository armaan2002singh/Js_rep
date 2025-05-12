 // **********************************if there are some values which are assumed that it should be true or false then for that value --->


  //example -->1

 const useremail = "armaan2@gamil.com"

 if (useremail) {
    console.log("got useremail");
    //this is executed here.
 }
 else{
    console.log("don't have email");
    
 }

 //example -->2
 const userpass = ""

 if (userpass) {
    console.log("got userpass");
    
 }
 else{
    console.log("don't have userpass");
    // this is executed 
 }


 // because in this type of case the code concider the String inside the varibale as true.

 // example -->3 

 //example -->2
 // here it is considering the empty array as true 
 const userid = []

 if (userid) {
    console.log("got userid");
        // this is executed 

 }
 else{
    console.log("don't have userid");
 }


 // falsy values 
 /* 
 false
 0
 -0
 BigInt = 0n
 null
 undefined
 Nan
 */

 //truthy values
 /*
 or all other values are truthy here are some of values.
 "0"
 "false"
 " "
 []
 {}
 function(){
  //empty function
 }
 */

 if (userid.length === 0) {
    console.log("Array is empty");
    // to check the Array.
 }

 const emptyobject = {}

 if (Object.keys(emptyobject).length === 0) {//keys creates the Array of the object then with length we can compare it with 0.
    console.log("Object is empty.");//Object is empty.
 }

 //nullish coalescing Operator (??) null undefined

 let val1;
//  val1 = 5 ?? 10;
//  val1 = null ?? 10
val1 = undefined ?? 15;

// console.log(val1); // 5
 //"??" used to for null and undefined.

 val1= null ?? 10 ??20
 console.log(val1);
 
 //.......................Terninary Operator

 //condition ? true : false;

 const iceteaprice = 100;

 iceteaprice <=80 ? console.log("less then 80.") : console.log("greater then 80.");
 //greater then 80.
 