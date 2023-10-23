// besic function
// console.log("a"); 
// console.log("i"); 
// console.log("t"); 
// console.log("t");

// function name (){
//     console.log("a"); 
// console.log("i"); 
// console.log("t"); 
// console.log("t");
// }      

// function addTwoNumber (number1, number2){
//     console.log(number1+number2)
// }

// addTwoNumber(6, 8)

function addTwoNumber (number1, number2){
    // let result = number1+number2
    // console.log("amit");
    // return result
    return number1+number2
}

const result = addTwoNumber(6, 8)
// console.log("result: ",result);

// userlogin Notification

function userloginmessage (username){
    if(!username){
        console.log("please enter a username")

        return
    }
    return `${username} just loged in`
}

// console.log(userloginmessage("amit"));

function calculateCratValue (value1, value2, ...num1){
    return num1
}
// console.log(calculateCratValue (300, 600, 900, 4000));

const user = {
    name: "amit",
    price: 200
}

function handleobject (anyobject){
    console.log(`username ${anyobject.name} and price ${anyobject.price}`);

}
// handleobject(user)
handleobject({
    name:"rohit",
    price: 400
})

let myArray = [200,500,700]

function array (anyarray){
    return anyarray[2]
}
// console.log(array(myArray))
console.log(array([200,500,400,300]))