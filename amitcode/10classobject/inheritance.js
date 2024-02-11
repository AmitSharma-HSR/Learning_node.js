class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USENAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email =email
        this.password= password
    }

    classComplete(){
        console.log(`a new class complete by ${this.username}`);
    }
}

const amit  = new Teacher ("Amit","mitybhsi@gmail.com","Password@123")
amit.classComplete()

const rohit = new User ("rohit")
rohit.logMe()
console.log(amit instanceof User);