const score = 400; // 400
//console.log(score);
const balance = new Number(200) //const score = 400;
//console.log(balance);

//console.log(balance.toString().length) // changed to string
//console.log(balance.toFixed(2)); //200.00

const othernumber = 123.8966; 
//console.log(othernumber.toPrecision(3)) // will round of and priority before descimal

const hundreds = 1000000;
//console.log(hundreds.toLocaleString('en-IN')); // en-IN used to separate thevalue according to indian standards


//------------------------------------------Maths------------------------


// console.log(Math);
// console.log(Math.abs(-4)); //will change negative to positive
// console.log(Math.round(4.3)); // will round off
// console.log(Math.ceil(4.2)); //will take the top value and answer is 5
// console.log(Math.floor(4.9)); // will take the lowest value which is 4

console.log(Math.min(4,3,5,6));
console.log(Math.max(4,3,5,4));
console.log(Math.random());
console.log(Math.random()*10+1);
console.log((Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1))+min)







