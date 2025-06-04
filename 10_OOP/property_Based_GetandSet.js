function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    //password
     Object.defineProperty(this, 'password',{
        get: function(){
            return `*#$${this._password}23`
        },
        set: function(value){
            this._password = value
        }
    })

}


// in modern code it is syntectically more readable then this one.
// but this easy to copy and increase the coding speed.

const maan = new User('maan@gmail', '1234')
console.log(maan.email);
const arm = new User('man@gmail.com','2344')
console.log(arm.password);
