function Setusername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}
function createUser(username, email, password){
    Setusername.call(this, username)// in actual it is not called yet. Here will onlly gave its refernce but not called. will use method.
    // to hold the reference  will use the ".call", also give reference to createuser() as well.
    // now it i working --> createUser { username: 'arm', email: 'maan@gmail', password: '123' }
    this.email = email
    this.password = password
}

const armaan = new createUser("arm","maan@gmail","123")
console.log(armaan); // here when i used this method to set values then, i only got email, password not username.
//---------->"createUser { email: 'maan@gmail', password: '123' }"
