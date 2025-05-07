//1......const tinderuser = new Object()
//2......const tinderuser = {}

//console.log(tinderuser); // will be empty object
// both are similar and the only difference is 1 is singleton object and 2 is non-singleton object.
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isloggedin = false

//console.log(tinderuser); //{ id: '123abc', name: 'sammy', isloggedin: false }

const regularuser = {
    email :"some@gmail.com",
    fullname : {
        userfullname : {
            firstname :"armaan",
            lastname  :"singh"
        }
    }
}

//console.log(regularuser.fullname?.userfullname.firstname); // can access the the nested objects by using dot in a sequence, like use the dot and open the nesting of the object.

// one more thing which is called *optional chaining* -->  console.log(regularuser.fullname?.userfullname.firstname);  which is denoted by ? after the key.

const object1 = {
    1: "a",
    2:"b"
}

const object2 = {
    3:"a",
    4:"b"
}


const object4 = {
    5:"a",
    6:"b"
}

//const object3 = { object1, object2}
//const object3 = Object.assign(object1, object2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//one more syntex :-
//const object3 = Object.assign({}, object1, object2, object4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } value is same in both of the cases, {} used while assigning the object make sure the merge. here it makes easy to read the this first "{}" sis the target and others are source. "{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' } after adding object4"

const object3 = {...object1, ...object2} // spread and join in object3 "{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }"
console.log(object3);

const users =[
    {
        id : "1",
        email : "a@gamil"
    },
    {
        name : "armaan",
        age : 20
    }
]

users[1].email

console.log(tinderuser);

console.log(Object.keys(tinderuser)); //[ 'id', 'name', 'isloggedin' ] "here all keys are given in array"

console.log(Object.entries(tinderuser)); //[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isloggedin', false ] ]

console.log(tinderuser.hasOwnProperty('isloggedin')); //true to check the presence.

