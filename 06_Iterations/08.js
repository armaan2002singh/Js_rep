// reduce method 
// method execute a user-supplied "reducer"

const mynums = [1,2,3]

// const mytotal = mynums.reduce((acc, currVal)=>{
//     console.log(`acc: ${acc} and currVal : ${currVal}`);
    
//     return acc + currVal
// }, 0)// [0] --> 0 is the initial value of accumulator.

// acc = Accumulator "which is an empty array" []
// currVal = current Value "which will be accessed by reduce as current value "

// const mytotal = mynums.reduce((acc, currVal)=>acc + currVal ,0)
const mytotal = mynums.reduce((acc, currVal)=>{
    console.log(`acc: ${acc} and currVal : ${currVal}`);
    return acc + currVal 
},0)

console.log(mytotal);

const shoppingCart = [
    {
        itemname :"js course",
        price : 2999
    },
    {
        itemname :"mobile dev course",
        price : 3999
    },
    {
        itemname :"py course",
        price : 5999
    },
    {
        itemname :"data science course",
        price : 12999
    },
]

const mytotal2 = shoppingCart.reduce((acc, item)=>{
    console.log(`acc: ${acc} and currVal : ${item.itemname}`);
    return acc + item.price
},0)

console.log(`here is your total - ${mytotal2}`);
/*
acc: 0 and currVal : js course
acc: 2999 and currVal : mobile dev course
acc: 6998 and currVal : py course
acc: 12997 and currVal : data science course
here is your total - 25996
*/
