const accountId = 144553
let accountEmail = "armaan2002"
var accountPassword = "12345" 
// const is used to declare a constant variable, which means its value cannot be changed
// let is used to declare a variable that can be changed later
accountCity = "punjab"
let accountState;

// accountId = 2 // This will throw an error because accountId is a constant
//console.log(accountId)  

 accountEmail = "heichh2200"
 accountPassword = "123456"
 accountCity = "delhi"

 console.table([accountId, accountEmail, accountPassword, accountCity]); // This will print the values in a table format
// console.log(accountId, accountEmail, accountPassword, accountCity); // This will print the values in a single line

/*
prefer not to use var
because of issue in block scope and functional scope 
*/


console.log(accountState); // This will print undefined because accountState is declared but not initialized