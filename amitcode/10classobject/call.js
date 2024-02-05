function newusername(username){
    // complex db calls
    this.username = username
}
function creatuser (username, age, email,) {
    newusername.call(this,username)
    this.age = age
    this.email = email
}

const chai = new creatuser ("amit", 23, "mmitusharma@gmail.com")
console.log(chai);