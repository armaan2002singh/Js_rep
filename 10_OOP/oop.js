// what is ............object literal- collection of properties and methods
// basic unit
//const user = {
//     username: "Armaan", // properties.
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function () {
//         //console.log("Got user details from database");

//         //console.log(`username: ${username}`);/// with this context, will show that user name is not defined. Beacuse here code don't know of which username's we are talking about?
//         //console.log(`username: ${this.username}`);// now here code will get info that we are talking about this context and a username present current context.

//         //console.log(this);
//         /*{ // will print current context.
//             username: 'Armaan',
//             loginCount: 8,
//             signedIn: true,
//             getUserDetails: [Function: getUserDetails]
//         }*/


//     }//method
// }

// to print 
//console.log(user.username);
//console.log(user.getUserDetails());//here we need to run it 


// now using this in Global context.
//console.log(this);
// was {}- empty, but will change in browser. There it iwll show the Window as current context(too many things).


// ----- now here if i want to make a user to then i need to do this whole process from scratch. will do changes in it adn will take to much time.

//-- to stop this mess and too much we can use Constructor Functions.
const user2 = {
    //properties adn methods
}



// ................................CONSTURCTOR FUNCTIONS................

//const promiseOne = new Promise()
//const date = new Date()
// what is the work of "new" here. Well here is the thing that this "NEW" is the constructor function. --> we can make no. of instances with one object literal by using NEW. But in some situations we need new instance without effecting previous values.

function user(username, loginCount, isLoggedIn){
    this.username = username // can use different here but we can use this to clarify the varible and username will be the value , will be entered from function.
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this // here we passed the all values.
    // if return will be written or not but it is implicitly defined in code.
}

const userOne = new user("Armaan", 12, true)
const userTwo = new user("Maan", 11, false) //well here with updating the values in UserTwo, it also updated the values of userOne which was not required. And values of userOne are overwrited will mess the code.
console.log(userOne.constructor);
//console.log(userTwo);

/*RESULT - new - for new instance.
 user{
    username: 'Armaan',
    loginCount: 12,
    isLoggedIn: true,
    greetings: [Function (anonymous)]
 }- userOne

user{ 
       username: 'Maan',
       loginCount: 11, 
       isLoggedIn: false,
       greetings: [Function (anonymous)]
    } - userTwo
*/


/*new - 
- will when we use it at first an empty object/instance will be created.
- then constructor function will be called due to new keyword, then packs the argument 
- then this keyword will inject all the argument 
- then we get the values and arguments.
*/
