class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai","chai@gmail.com","1234")

chai.addCourse()
const masalaChai = new User("masalaChai")
//masalaChai.addCourse() // do not have access of this method
masalaChai.logMe()
console.log(chai === masalaChai);// false
console.log(chai === Teacher); // false
console.log(chai instanceof Teacher); // true
