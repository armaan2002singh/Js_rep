class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    //for email
    get email(){
        return `${this._email}*****y` // _email is private property 
    }

    set email(value){
        this._email=value
    }

    //Getter and setter.
    get password(){
        // well we declare the properties then their methods automatically declared.
        return `${this._password}hitesh`
    }// is use to get the values
    // got error with only "get" because if we defining the getter then we have to define the setter as well.

    set password(value){// is used to set the value
        this._password = value
         // Maximum call stack size exceeded --> when i already set the password in the constructor then again i am setting the value in password. so i got this error.
    }
// even the constructor and setter both setting the value in the password. Will declare the new property in setter to avoid it.
}
const Armaan = new User("armaan@gmail","abs")
console.log(Armaan.password, Armaan.email);

