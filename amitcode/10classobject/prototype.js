const myHero = ["hulk", "thor"]

let heroPower = {
    hulk: "smash",
    thor: "lightning",
    getHeroPower: function (){
        console.log(`power of thor is ${this.thor}`);
    }
}
Object.prototype.amit = function (){
    console.log(`amit is avilable in all subject`);
}
Array.prototype.newAmit =()=>{
    console.log(`amit says hello to everyone`);
}
heroPower.amit()
myHero.newAmit()
// heroPower.newAmit()

// Inheritance

const user = {
    name: "amit",
    email: "amit@gmail.com"
}

const teacher = {
    makeVideo:true
}

const TeachingSupport= {
    technicalSupport : false
}

const TA = {
    makeAssignment: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = user

//modren syntex
Object.setPrototypeOf(TeachingSupport,teacher)
let AnotherUsername = "Amit     "

String.prototype.trueLenght = function (){
    console.log(this);
    // console.log(this.name);
    console.log(`the true lenght of name is ${this.trim().length}`);
}
AnotherUsername.trueLenght()
"sharma".trueLenght()
"new name".trueLenght