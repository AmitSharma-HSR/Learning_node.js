class User {
    constructor(username, email){
        this.username=username
        this.email=email
    }
    get email(){
        return `${this._email.toUpperCase()}, ye galat h`
    }
    set email(value){
        this._email= value
    }
}

const amit = new User("amit", "mitybhsi@gmail.com")
console.log(amit.email);