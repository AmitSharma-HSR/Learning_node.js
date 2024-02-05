// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password 

//     }
//     changeUsername (){
//         return `${this.username.toUpperCase()}`
//     }
//     passwordEncycrpted(){
//          return `${this.password}@${this.username}`
//     }
// }
// const amit = new User ("amit", "amit@gmail.com", "123")
// console.log(amit.passwordEncycrpted());
// console.log(amit.changeUsername());


function User(username, email, password){
        this.username = username
        this.email = email
        this.password = password 

    }
    User.prototype.changeUsername=function(){
        return `${this.username.toUpperCase()}`
    }
    User.prototype.passwordEncycrpted=function(){
         return `${this.password}@${this.username}`
    }
const Rohit = new User ("rohit", "amit@gmail.com", "123")
console.log(Rohit.passwordEncycrpted());
console.log(Rohit.changeUsername());