// primitive data types
// 7 categories : string, number, boolean, null, undefined, symbol, bigint

const score = 100
const scorevalue = 100.5

const loggedIn = false
const outsidetemp = null
let useremail;

const id = Symbol('123')
const anotherid = Symbol('123')
 //console.log(id === anotherid); // false

 const bignumber = 1234567890123456789012345678901234567890n

// non-primitive data types also called reference data types
// 1. object
// 2. array
// 3. function

const heros = ['thor', 'spiderman', 'ironman']

let myobj = {
    name: 'tony',
    age: 30,
}

const myfunction =function(){
    console.log('hello world');
}

// console.log(typeof myobj); // object
// console.log(typeof myfunction); // function
// console.log(typeof heros); // object
// console.log(typeof score); // number
// console.log(typeof scorevalue); // number
// console.log(typeof loggedIn); // boolean
// console.log(typeof outsidetemp); // object
// console.log(typeof useremail); // undefined
// console.log(typeof id); // symbol
// console.log(typeof anotherid); // symbol
// console.log(typeof bignumber); // bigint
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined

