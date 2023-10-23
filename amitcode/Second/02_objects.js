// const user1 = new Object()
// console.log(user1)

const user1 = {}

user1.id = "0214"
user1.name = "amit"
user1.isloggedIn = false
// console.log(user1)

const user2 = {
    email: "amit@gmail.com",
    username: {
        fullname: {
            firstname:"amit",
            lastname: "sharma"
        }
    }
}

// console.log(user2.username.fullname)

// Object.assign

const userone = { 1: "a", 2: "b"}
const usertwo = { 3: "a", 4: "b"}
const userthree = { 4: "a", 5: "b"}

// const userfour = { userone, usertwo}
// const userfour = Object.assign({}, userone, usertwo, userthree)
const userfour = {...userone, ...usertwo, ...userthree};

// console.log(userfour);

const users= [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
]
users[1].id

// console.log(Object.keys(user1));
// console.log(Object.values(user1));
// console.log(Object.entries(user1));

// console.log(user1.hasOwnProperty('name'));


// Object Destructre

const video = {
    title: "video 1",
    time: "5:00",
    videoowner: "amit"
}

const {time: newtime} = video
console.log(newtime);