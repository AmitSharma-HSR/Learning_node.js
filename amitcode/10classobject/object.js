function multiply5(num){
    return num*5
}
multiply5.power = 5
// console.log(multiply5(8));
// console.log(multiply5.power);

function creatUser (username, score){
    this.username = username
    this.score = score

}
creatUser.prototype.icrement = function(){
    this.score++
}
creatUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const amit = new creatUser("amit", 49)
const rohit = new creatUser("rohit", 99)

amit.printMe()
// rohit.printMe()

