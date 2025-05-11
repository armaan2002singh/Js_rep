const user = {
    username: "Armaan",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);/* after using it i got -->
Armaan , welcome to website
        {
          username: 'Armaan',
          price: 999,
          welcomeMessage: [Function: welcomeMessage]
        }
sam , welcome to website
        {
          username: 'sam',
          price: 999,
          welcomeMessage: [Function: welcomeMessage]
        } */

        // this is used for current context
    }
    // there is no "this" in arrow functions but why? = 
}

// if i will write the "this" here what will be the current context"?
// user.welcomeMessage(); // Armaan , welcome to website
// user.username = "sam"; // here the context is changed
// user.welcomeMessage();//sam , welcome to website,

//console.log(this); // here it will refer an empty object because there is no any value in global scope.

/*On browser if i will print "this" then it will show the windows,beacuse before the execution of javascript is done on browser, but now engine is standalone. So in browser the global object is Windows, all events are given or visible in that.*/

// function chai(){
//     let username = "Armaan";
//     //console.log(this);/* here i got many values */
//     //console.log(this.username);// it showing undefined, able to access this is in objects but not in function.
// }
//chai();


//........................ arrow functions.............
 
// const chai = function(){
//     let username = "Armaan";
//     //console.log(this.username); // undefined
    
// }

const chai = ()=>{ //just function keyword is removed  and "=>" is placed after the brackets.
    let username = "Armaan";
    // console.log(this.username); // undefined in arrow function as well.
    //console.log(this); // we got empty parentheses
}

//********************* */ well, when i used "this" in normal function then i got no. of values and while in arrow function i got just an empty curly braces. One more thing in normal function it was showing the undefined while was accessing the values with the help of "this.___", but in arrow function it is showing again an empty block or curly braces.*********************

//chai();

// ()=>{ // it is a basic sytex of arrow function, it can be also hold in a varibale, written below.

// }

// const addtwo = (num1, num2)=>{ //basic *******
//     return num1 + num2;
// }
//console.log(addtwo(2,3)); // 5


// const addtwo = (num1, num2)=>  num1 + num2//implicite return - will consider that this code is of one line and no need to write return in it.  *******


//const addtwo = (num1, num2)=>  (num1 + num2) // in arrow function if you are writting the code in curely braces then need to write return, if it is writtten in parentheses then no need to write return.

const addtwo = (num1, num2)=>  ({username: "Armaan"}) // if we want to return the object then it is required to wrap it in parentheses. result = > { username: 'Armaan' }.


//console.log(addtwo(2,3)); // result was same = 5, even with single line code.

//const myArray = [1, 2, 3, 4, 5, 6]

//myArray.forEach()