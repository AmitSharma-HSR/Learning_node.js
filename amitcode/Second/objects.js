const mySym = Symbol("oldsym1");

const jsuser = {
    name: "amit",
    "newname": "newamit",
    [mySym]: "sym1",
    age: 23,
    isLoggedIn: false ,
    lastLoginDay: ["mondey", "tuesday"]
}

// console.log(jsuser.name)
// console.log(jsuser["newname"])
// console.log(jsuser[mySym])

jsuser.age = 24;
// Object.freeze(jsuser);
jsuser.age = 25;
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello js user")
};

jsuser.greeting();

jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.isLoggedIn}`)
};
jsuser.greetingtwo();
