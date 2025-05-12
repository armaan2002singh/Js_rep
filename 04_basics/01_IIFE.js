//Immediate Invoked Function Expression (IIFE)

// to avoid the pollution from global scope.

(function chai(){
    // it is an named IIFE
    console.log('DB connected');
    
})(); // here the IIFE we have used don't know that where to stop that function so there is need to use semi-colon after its use to end it.

//(here we write the definition of function)( and in here we write the execution)
//mean to say instead of using the the "chai()" we can use the IIFE concept by wraping the function in parentheses"()" and also second "()" parenthese after if to execute it immediatly. To avoid the pollution of the global scope."

( (name)=>{
    // this is a un-named IIFE.
    console.log(`DB connected two ${name}`);
    
})('Armaan'); // now after using the ";" in first IIFE now it can execute without any sort of error.
// if we want add a variable in the function then we can add that with the similar concept of function that we had used in function by mentioning the parameters and values in the parentheses.