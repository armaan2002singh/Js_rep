
// if all these varubales are working with var, then what was the needed to create these with different let and const.

//these are introduced because var, for block scope which should exist but not working like that.

//{} --> it is scope in every programming language.

// this "{}" is also used in object but there it is used to declare the object. however, in conditional statements and functions then there it is considered as a scope.

/*  

if(true){
    //scope
    let a = 30;
    const b = 20;
    var c= 30; 
    //now the scope of these are in these curly braces
}


//console.log(a);
//console.log(b);
console.log(c); // here the result was printing, where it should not be, even the value is declared in the condition inside of the curly braces.

*/

//var c= 300;
let a = 300;
//global scope written outside openly.
if(true){
    //block scope written inside the curly braces
    let a = 30;
    const b = 20;
    console.log("inner", a); // it will also executed as a value of block scope.
    
    //var c= 30; even if we use it nomrally with auto generation then  again the problem will be same.
    //c = 3; 
    //now the scope of these are in these curly braces
}

 console.log(a); // result will be a = 300; because the value was declared outside.
// console.log(b);
//console.log(c); // here the value was already declared before the if statement. but it is showing the updated value of c = 39, even the outside value was c = 300,

//----> "The values is written as global scope is available for inside the block, but the value which was declared inside was not accessed outisde of the block."

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
} //here if "i" is in the loop so noone want that this "i"  creartes mess outside, in global scope.

//if we run code in browser's inspection then the scope is different from a code editor scope.