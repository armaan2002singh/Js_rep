const name = "armaan"
const repocount = 5;

//console.log(name + repocount + "value");

//console.log(`hello my name is ${name} and my repositories are ${repocount} `); basic use of backticks (``)

const gamename = new String('Armaan-singh')

// console.log(gamename[0]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(3));
console.log(gamename.indexOf('r'));

const newstring = gamename.substring(0,4);
console.log(newstring); 

const anotherstring = gamename.slice(-2,1);
console.log(anotherstring);


const newstringone = "  armaan  ";
console.log(newstringone);
console.log(newstringone.trim())

const url = "https://armaan.com/arman%-m-a-n";
console.log(url.replace('%-','_'));

console.log(url.includes('https'));

console.log(url.split('-'))