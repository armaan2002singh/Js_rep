// for
 for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
      //console.log("5 is best number.");
      
    }
    //console.log(element);
    
 }

 // execution of loop is --> 
//1. variable will declare, //
 // 2. condition will be checked, 
 //3. Will enter in block to execute the content inside the {}, //
 // 4. then continue to the iteration.

//console.log(element);// cannot access element outside of loop because of its scope.

for (let i = 0; i <= 10; i++) {
   //console.log(`outer loop values ${i}`);
   
   for (let j = 0; j <=10; j++) {
      const element = j;
       // console.log(`inner loop values${j} outer loop values${i}`);
       //console.log(i + 'x' + j + '=' + i*j);
       
   }
   
}

let myarray = ["flash", "Batman", "Superman"]
//console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
   const element = myarray[index];
   //console.log(element);
}

//..............................................keywords........................................
// Break and continue

// for (let index = 0; index <= 20 ; index++) {
//    if (index == 5) {
//       console.log(`5 is detected`);
//       break // will detect and stop the loop.
//    }
//    console.log(`value of i is ${index}`);
// }

// for (let index = 0; index <= 20 ; index++) {
//    if (index == 5) {
//       //console.log(`5 is detected`);
//       continue // will detect and continue.
//    }
//    //console.log(`value of i is ${index}`);
// }