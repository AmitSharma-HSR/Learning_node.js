 const user = {
    username: "amit",
    age: 24,

    welcomemessage: function (){
        console.log(`${this.username}, welcome to the website`)
    }
   
 }
// user.welcomemessage()
// user.username="new amit"
// user.welcomemessage()
// console.log(this);

// function one (){
//     let username = "amit"
//     console.log(this.username)
// }
// one ()

// const one = function (){
//     let username = "amit"
//     console.log(this.username)
// }
const one =  () =>{
    let username = "amit"
    // console.log(this)
}
// one()

// let addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4));
// let addTwo = (num1, num2) => num1 + num2  ==> implicity function
// let addTwo = (num1, num2) => (num1 + num2)
// const chaiOrCode = {
//     TeacherName: "Hitesh_Choudhary",
//     Rating: "10/10",
//    comment: () => (`${this.TeacherName} is the Superstar & his Rating ${this.Rating}`)
   
// }

// chaiOrCode.comment()

// const chaiOrCode = {
//     TeacherName: "Hitesh_Choudhary",
//     Rating: "10/10",
//    comment: function(){console.log(`${this.TeacherName} is the Superstar & his Rating ${this.Rating}`)}
   
// }

// chaiOrCode.comment()
