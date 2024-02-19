const User = {
    _email: 'amit@gmail.com',
    _password: 'Amit@123',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const rohit = Object.create(User);
console.log(rohit.email);