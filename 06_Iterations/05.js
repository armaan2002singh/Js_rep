const coding = ["js", "ruby", "cpp", "python", "java"]

// higher order
// coding.forEach( function (val) {
//     console.log(val);
//     //normal function
//     //callback function have no name
// })

// coding.forEach( (val)=>{
//     console.log(val);
//     // with arrow functions
// })

// function printMe(item){
//     console.log(item);
//     // can use it as parameter inside of forEach loop of "coding" array 
// }

//coding.forEach(printMe) 
// we gave the reference of that function, not the execution

// coding.forEach((item, index, arr)=>{
//   console.log(item, index, arr);
//     /* result -->
//     js 0 [ 'js', 'ruby', 'cpp', 'python', 'java' ]

//     ruby 1 [ 'js', 'ruby', 'cpp', 'python', 'java' ]

//     cpp 2 [ 'js', 'ruby', 'cpp', 'python', 'java' ]

//     python 3 [ 'js', 'ruby', 'cpp', 'python', 'java' ]

//     java 4 [ 'js', 'ruby', 'cpp', 'python', 'java' ]
//     */
// })

// a situation where we have an array and objects in it.

const mycoding = [{
    languageName: "javascript",
    languagefile: "js"
},
{
    languageName: "java",
    languagefile: "java"
},
{
    languageName: "python",
    languagefile: "py"
}
]

mycoding.forEach((item)=>{
    console.log(`"${item.languageName}" is the language name and file of this language is -- "${item.languagefile}"`);
    /*
    "javascript" is the language name and file of this language is -- "js"

    "java" is the language name and file of this language is -- "java"
    
    "python" is the language name and file of this language is -- "py
    */
})