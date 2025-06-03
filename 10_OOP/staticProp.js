class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){// in some situation we do not want to give access to the objects which are initiated by this.
        // will user Static will stop the upper condition.
        return `123`
    }
}

const armaan = new User("Armaan") // after using the "Static -->armaan.createId is not a function"
//console.log(armaan.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }

}

const iphone = new Teacher("iphone", "iphone@phone.com")
console.log(iphone.logMe());
console.log(iphone.createId());// not allowing the access to children as well even by itself