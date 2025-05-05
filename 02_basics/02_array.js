const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros) //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] merged the array in array considered array as a data

//console.log(marvel_heros);

//const allheros = marvel_heros.concat(dc_heros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ] now merged properly
//console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros] //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(all_new_heros);


const anotherarry = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = anotherarry.flat(3); /*[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ] 
    
  values are spreadout*/

console.log(real_another_array);


console.log(Array.isArray("Armaan"));
console.log(Array.from("Armaan"));

console.log(Array.from({name : "Armaan"})); // interesting will give empty array


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]


//......................should study about isarray, from, of