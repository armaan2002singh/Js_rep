// stack and heap
// stack: primitive data types, function calls, local variables. copy
// heap: objects, arrays, functions. reference

//stack
let myname = "John";
let anothername = myname;
anothername = "Doe";
console.log(anothername); // John
console.log(myname); // John

let user1 = {
  name: "John",
  upi: 30,
};

let user2 = user1;

//here the user2 is a reference to the user1 object, but in stack anothername is a copy of the myname variable


//console.log(user1); // { name: 'John', upi: 30 }
//console.log(user2); // { name: 'John', upi: 30 }