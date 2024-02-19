function User (age, email){
 this._age = age 
  this._email = email

  Object.defineProperty (this, 'email', {
    get: function(){
        return this._email.toUpperCase()
    },
    set : function(value){
        this._email = value

    }
  })
}
const amit =new User(23,"amit@gmail.com")
console.log(amit.email);