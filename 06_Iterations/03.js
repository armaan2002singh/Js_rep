// for of 

// ["","",""] // string in arrays.
// [{},{},{}]// objects in arrays.

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
    
}

const greetings = "hello world!"
for (const greet of greetings) {
    //console.log(`each character of greeting is ${greet}`);
    
}

//.........................MAPS

const map = new Map() //object holds key-value pairs and remember the original insertion order of the keys. // no duplicate values and all values will be unique.
map.set('IN','India')
//map.set('IN','India') //  will not repeat the same values and this IN will not be added in 'map'
map.set('US',"United states of America")
map.set('FR',"France")

//console.log(map);
/*result -->
Map(3) {
  'IN' => 'India',
  'US' => 'United states of America',
  'FR' => 'France'
}
*///kind of object and syntex like an array.
for (const key of map) {
    //console.log(key);
    /* result -->
    [ 'IN', 'India' ]
    [ 'US', 'United states of America' ]
    [ 'FR', 'France' ]  
    */
}

// but if need the all values single.
for (const [key, value] of map) {
    //console.log(key,'=',value);
    /* result --> all values are printed separatly.
    IN = India
    US = United states of America
    FR = France
    */
}

const myobject = {
    //'game1':'NFS',
    //'game2':'spiderman'
    game1:'NFS',
    game2:'spiderman'
}

// for (const [key, value] of myobject) {
//     console.log(key,'=',value);
//     // here the object is not iteratable.
// }
//there are different ways to iterate the objects.

