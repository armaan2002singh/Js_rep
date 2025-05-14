const mynums = [1,2,3,4,5,6,7,8,9]

//const newnums = mynums.map((num)=> num+10)
//const newnums = mynums.map((num)=> { return num+10})
const newnums = mynums//chaining.....
        .map((num)=> num*10) // 1
        .map((num)=> num + 1) //2 --> will consider the values from 2
        /*result -->
        [11, 21, 31, 41, 51, 61, 71, 81, 91]
         */
        .filter((num)=> num >= 40)
        

console.log(newnums); // added 10 in all
// filter will check the condition but Map consider all.

