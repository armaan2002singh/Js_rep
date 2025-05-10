
function sayMyName(){
console.log("A");
console.log("r");
console.log("m");
console.log("a");
console.log("a");
console.log("n");

}

//sayMyName(); // name is printed

// function addNumbers(num1, num2){
//     console.log(    num1 + num2 );
    
// }

//addNumbers(); // Nan = not a number.
//addNumbers(3,4); //7
//addNumbers(3,"4"); //34 considered the 4as string

//function (parameters)
//{
//}

//callingFunctions(arguments);


// function addNumbers(num1, num2){
//     //let     result  = num1+num2;
//     //return result;
//     //console.log("armaan"); //unreachable code
//     return num1+num2;
// }
// const result = addNumbers(3,4); // if return something then we will be able to return something.
// console.log("value of result",result); //undefine?


//function loginusermessage(username = "sam") // here the default value is given in function, here it will return the value of parameters
function loginusermessage(username){
    //if(username === undefined)
    if(!username){ //opposite of username.
        console.log("please define username.");
        return
        
    }
    return `${username} just logged in`;
}

//loginusermessage("Armaan") was not able to show value or print because command of printing was not given.
console.log(loginusermessage()) // more if the values are not given then it will show undefine.
