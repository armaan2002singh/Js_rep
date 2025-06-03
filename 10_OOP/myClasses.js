// ES6

class User{// constructure call when will use the new keyword then it will called automatically.
    constructor(username, email, password){
        this.username= username;
        this.email =email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("maan","armaan@gamil","123")
console.log(chai.encryptPassword()); // its encrpting the password.
console.log(chai.changeUsername());// changed to upper case.

// behind the seen...........................
// this way is also working with out class.
function User(username, email, password){
        this.username= username;
        this.email =email;
        this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea","tea@gmail","123")
console.log(tea.encryptPassword()); // its encrpting the password.
console.log(tea.changeUsername());
