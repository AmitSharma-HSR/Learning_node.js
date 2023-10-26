//  if or else
// const myself = {
//     name: "amit",
//     age: 23

// }
// if(myself.age === "23"){
//     console.log( "yes your age + 18" )
// } else if (myself.name === "amit1"){
//     console.log( "yes your name amit & age + 18" )
// }
//  else {
//         console.log( " your age is not more than 18")
//     }


const userLoggedIn = true
const age18Plus = true

if (userLoggedIn && age18Plus) {
    console.log( "verified" )
}

const userLoggedFromgoogle = true
const userLoggedFromEmail = false

if (userLoggedFromEmail || userLoggedFromgoogle && userLoggedIn) {
    console.log( "verified" )
}