// premitive data types

// 7 types
// 1. string
// 2. symbol
// 3. number
// 4. null
// 5. bingInt
// 6. boolean
// 7. undefined

const id = Symbol('0606') 
const anotherId = Symbol('0606')  // Use Of Symbol For unicness
// console.log(id === anotherId);
 
const bigNumber = 9728594974n // uses of bigInt
// console.log(typeof bigNumber);


// Refrences type (Non Premitive type)
// Array, Object, function;

const myhobby = ['walking', 'running', 'reading']; // [array]

let myObject = {
    myName: "amit",
    age: 22,
    isLoggedIn: false  // in currly bracket put data sappretted by comma name: "amit" , age: 22
}   //  this type data called objects {interbeetween these currly brecket}

const myFunction= function(){
    console.log("hello world");
}

console.log(typeof myhobby);