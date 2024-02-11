class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username = ${this.username}`);
    }
     static createUserId (){
        return Math.floor((Math.round(Math.random()*1000))+ 1000)
    
    }
}
const Hitesh = new User ("hitesh")
console.log(Hitesh.createUserId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const amit = new Teacher ("amit", "amit@gmail.com")
console.log(amit.createUserId());