function multipleby5(num){
    return num*5
}

multipleby5.power = 2

console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);

/* we got this- 
25
2
{}

--> how 2 and prototype is {empty} and all references store in this.
technilcally function also refer to an object.
*/

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){ // we can add new ones as well.
    this.score++//-- means "jiss in hindi" do increment of this who called.
}
createUser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
    
}
const armaan = new createUser("maan", 25)
const abc =new createUser("dsds", 250)

// even we can access the internal options of prototype with writing that word again and again. 

//armaan.printme() // but got a problem, where cannot read properties of undefined.But after using the 'new' keyword it will work and put the value in the named variable. "VIDEO - 43, TIME - 22:20SEC"


// note in md file,.........................................
