// console.log(2>1); // true
// console.log(2<1); // false
// console.log(2>=1); // true
// console.log(2<=1); // false
// console.log(2==1); // false
// console.log(2!=1); // true
// console.log(2===1); // false
// console.log(2!==1); // true

// console.log("2">1); // true automatically converts 2 to string
// console.log("02"<1); // false automatically converts 2 to strin

console.log(null >0); // false
console.log(null ==0); // false
console.log(null >=0); // true

/* the reason is that an equality check == and comparisons > <>= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3)null >=0 is true and (1)null > 0 is false. */

console.log(undefined >0); // false
console.log(undefined ==0); // false    

// strick check ===
console.log("2" ===0); // false

// avoid to use null and undefined in comparisons