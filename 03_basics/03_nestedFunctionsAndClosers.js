//scope level
//nested scope -->
function one(){
    const username = "Armaan";
    function two(){
        //nested one 
        const website = "youtube";
        // execution-3 ****
        //console.log(username); // executed correctly because it can access the scope of function one.
        
    }
    //console.log(website); showed the error the scope of the website was inside of function two.
    
    //two(); // execution - 2****

}

one();// execution - 1**** like a chain. if i will comment the two() then it will not execute.

// in nested functions the child functions can access the parent's variables.

if (true) {
    const username = "Armaan";
    if (username === "Armaan") {
        const website = "youtube";
       // console.log(username + website); // executed - 3
    }
    //console.log(website); 1*error
    
}

//console.log(username); 2*error

//+++++++++++++++++++++++++ interesting +++++++++++++

//console.log(addone(5));// vlaue is 6

function addone(num){ //1 it is a function 
    return num +1;
}


//console.log(addtwo(5)); // it gives an error, it can not access the addtwo before its function declaration. called hosting.

const addtwo = function(num){//2  bit is also called function but sometimes, it referred as an expression. Beacause it is stored in variable. Here we holded the function in the variable with declaration.
    return num +2
}
//console.log(addtwo(5)); // here it si executed.