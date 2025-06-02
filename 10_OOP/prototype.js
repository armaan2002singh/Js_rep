// to learn prototype video - 43, timestamp is - 27:01.

// let myName ="Armaan     "
// let myday ="sunday     "
// console.log(myName.truelength); // 6  but after adding the spaces it is also counting them. which is wrong. will use it to avoid that thing.

// one more way
//console.log(myName.trim().length); // but here we need to write it again will take time so we need something to get thing by default. Which name will be "trueLenght".


// will make a method..........................................
let myheros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: function (){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

// here we accessed the top level hierarchy where we defined the Armaan() in the upper or main Object which makes it a default function.
Object.prototype.Armaan = function (){
    console.log("Armaan is present in all object");
    
}

// heroPower.Armaan();
// myheros.Armaan();
Array.prototype.ArmaanHey = ()=>{
    console.log("armaan says hellow.");
    
}

//myheros.ArmaanHey(); // it is working here. In Array
//heroPower.ArmaanHey(); // here it is not working because this function is only declared in Array.
/*
it is like hierarchy, where if the power will be defined in  the top level then access will be shared, if it is according to the above example then will be access by that type where it is avaiable.

function-->
Array   --> Object --->null
String  -->


*/



// inheritance ................................................................

const user = {
    name:"Armaan",
    email:"arm@google.com"
}
const Teacher={
    makesVideo :true
}
const TeachingSupport={
    isAvaiable:false
}
const TAsupport={
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__: TeachingSupport // providing the access of TeachingSupport with inheritance by using "__proto__"
}

Teacher.__proto__ = user // this prototypal inheritance. Here Teacher can access the user's properties.
// if there is any situation where we want to share the information. check it in above line.


// but its modern syntex---------------------------------------
Object.setPrototypeOf(TeachingSupport, Teacher) // used in modern codes, where 'setPrototypeOf(recieve access, source)'
//console.log(TAsupport.isAvaiable);// can access.


// now we will solve the first example here.Again
let anotherUsername = "ArmaanCode  "

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    console.log(`true lenght is ${this.trim().length}`);
    
}

anotherUsername.trueLenght()// here we creates the method as default state to increase the reusability of code.

"Armaan".trueLenght()
"icetea".trueLenght()// well this refers to the current context 
// like "this" will give the context of that, which will call it.