//singleton when we create from constructor and if not like literals then not 
//Object.create

const mysym = Symbol("key1")// symbol if i want to access it in object 

//obejct literals
const jsuser = {
    name/*key */ : "armaan", //value
    age : 20,
    //mysym : "key1", // this format it will access it as a string
    [mysym]:"key1", // this is the correct way to access the symbol.   [Symbol(key1)]: 'key1'
    location : "punjab",
    "fullname" : "armaansingh",
    email : "armaan2002@gmail",
    isloggedin : false,
    lastloggedindays : ["monday","saturday"]

} // access from key and values

// how to access ......................
//console.log(jsuser.age); // for  normal key 
//console.log(jsuser["email"]);
//console.log(jsuser["fullname"]); // if the key is written in string format then this the correct way to access it.
//console.log(jsuser[mysym]); // result will be key1

jsuser.email = "armaan0707@gmail" // changed the value.
//console.log(jsuser["email"]);

//Object.freeze(jsuser); // after this no will be able to change the data of the object.
jsuser.age = 30;
//console.log(jsuser["age"]);
//console.log(jsuser);

jsuser.greeting = function () {
    console.log("hello jsuser");
    
}

jsuser.greeting2 = function () {
    console.log(`hello jsuser, ${this.name}`);
    
}

console.log(jsuser.greeting());
console.log(jsuser.greeting2());

// try to access the value of an object with "." and access them with "[""]" in special cases only.
