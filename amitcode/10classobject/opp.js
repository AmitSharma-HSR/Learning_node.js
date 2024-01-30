const myusername = {
    username: 'amit',
    loggedInCount : 28,
    signedIn : true,
    getUserDetails: function(){
        console.log(`Usename: ${this.username}`);
    }
          
}
// console.log(user.username);
// console.log(user.getUserDetails());

function user(username, age, isLoggedIn){
    this.username=username
    this.age=age
    this.isLoggedIn=isLoggedIn

    this.greetings = function(){
        console.log(`welcome ${username}`);
    }
    return this
}
const userOne = new user("amit", 25, true)
const userTwo = new user ("rohit", 22, false)

console.log(userOne);
console.log(userTwo);
