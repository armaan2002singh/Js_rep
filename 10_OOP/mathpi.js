//getOwnPropertyDescriptor --> will give the knowledge about hidden things of object.
// Object.getOwnPropertyDescriptor(Math)

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // is constent will not be changed.

// why i am not able to change it?

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
//console.log(descripter);
/*
Here is the thing PI in math is not- writable-->
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
this property is hardcode in deepth owith c++ will not able to true it.
*/

//const mynewobject = Object.create(null)

const chai = {
    name:"masalaChai",
    price : 230,
    isAvailable: true,

    orderChai: ()=>{
        console.log(`chai nhi banni`);
        
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai));// undefined
// well it is undefined because it is properties descriptor but the chai is an object.
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'masalaChai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
//changing .......................CAN define the properties............
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable : false
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'masalaChai',
  writable: true,
  enumerable: true,
  configurable: true
}

changed--->

{
  value: 'masalaChai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/
// for (let [key, value] of Object.entries(chai)) {
//     console.log(`${key}:${value}`);
//}// well here it is an object which is not iterable by-default.
/*But after using Object.entries(chai)-->

name:masalaChai
price:230
isAvailable:true

but,if there is function in hte code the it will be exposed 
-->
name:masalaChai
price:230
isAvailable:true
orderChai:()=>{
        console.log(`chai nhi banni`);
        
    }
*/

//solution..........................

for (let [key, value] of Object.entries(chai)) {
    if(typeof value != 'function'){
        console.log(`${key}:${value}`);
    }
}
/*
best we get -->

name:masalaChai
price:230
isAvailable:true
*/

// well when i changed the property of chai --> enumerable : false, then it is not iterating in the forof loop. only price and isAvailable is printing.