const User= {
    _email: 'maak@gmail.com',
    _password:"12443",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User) // will create the tea named object with help of this method.
console.log(tea.email);
// on bases of user, tea is created.
console.log(User.email);
//three type of syntex are available like--> Class, Function, Object.
