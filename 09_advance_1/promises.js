//fetch('url').then().catch().finally()


//creation of Promise
const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    //DB calls, Cryptography, network.
    setTimeout(() => {
        //console.log("async taks is complete.");
        resolve()
    }, 1000)
}) // but what these reslove and reject are doing in this code?




promiseOne.then(() => {
    //console.log("Promise consumed");

})// here then has connection with resolve.
// here set time out is executed but the next code with log is not executed, to execute it need to connect the resolve and then.
//now we connected the resolve with then and we able to execute the code.


new Promise(function (resolve, reject) {
    setTimeout(() => {
        //console.log("asyn task two");
        resolve()
    }, 1000)
}).then(() => {
    //console.log("Asyn two resolved.");

})
// code is kind of promising and working one by one.


const promiseThird = new Promise(function (resolve, reject) {
    setTimeout(() => {
       // resolve({ username: "Armaan2002", email: "armaanaulakh@gmail" })
    }, 1000)
})

promiseThird.then((user) => {
    //console.log(user);

})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "ABC", password: "123" })
        } else {
            reject('ERROR: something went wrong.')
        }
    }, 1000)

}) //chaining
promiseFour.then((user) => {
    console.log(user);
    return user.username
})
    .then((username) => {
        console.log(username);

    })
    .catch(function (error) {
        console.log(error);

    })
    .finally(() => {
        console.log("the promise is either resolved or either rejected");
    })


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "ABCD", password: "12345" })
        } else {
            reject('ERROR: abcd went wrong.')
        }
    }, 1000);
})



//async await,,,,,,,,,,,,,,,,,,,,,,,
async function consumePromiseFive() {
    try {
        const response = await promiseFive// handled in  response.
        console.log(response);
    } catch (error) {
        console.log(error);

    }

}

consumePromiseFive()
// there is only one problem in async await which they cannot handled the error directly.

// but we can use it by handling the error with try catch.


// access of API with async await....................................................
// here now will learn to access the real time data from an API.
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         //console.log(response); here response is working.
        
//         const data =await response.json() // here we have changed the response in to JSON.
//         console.log(data);
//         // it is not giving the result because the "response.json()" also take time. so we have to "Await" them as well.
//     } catch (error) {
//         console.log(error);

//     }

// }

// getAllUsers()

// here we will access the info with the Promise by using the then(), catch()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error))