const myobject = {
    js : "javascript",
    cpp : "c++",
    rb  : "ruby",
    swift : "swift by apple"
}

// for (const key in myobject) {
//  console.log(key);
//    /* got all the keys.
//     js
//     cpp
//     rb
//     swift
//    */
// }

// for (const key in myobject) {
//  console.log(myobject[key]);
//    /*
//     javascript
//     c++
//     ruby
//     swift by apple
//    */
// }

for (const key in myobject) {
 //console.log(`${key} is shortcut name of ${myobject[key]}`);
   /*js is shortcut name of javascript
    cpp is shortcut name of c++
    rb is shortcut name of ruby
    swift is shortcut name of swift by apple
     */
}

const programming = ["js","rb","py","java"]

// for (const key in programming) {
//     console.log(programming[key]);
//     // if we will use the on key for print in the parentheses then will get the index in result but after using "programming[key]" we will get the values as well.
// }

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"America")
// map.set('FR',"France")

// for (const key in map) {
//    console.log(key);
//    // we can not perform the iteration on map by this way.
// }

