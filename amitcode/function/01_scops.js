const a = 15

if (true) {
    let a= 10
    const b = 30
    // console.log("inner: ",a);
}
// console.log(a)

function one (){
const username = "amit"

function two (){
    const website = "niharo.com"
    // console.log(username)
    return ` username ${username} and website name ${website}`
}
two()
}
one()


if (true){
    const username = "amit"
    
    if ( username === "amit"){
        const website = " niharo.in"
        // console.log(username +  website)
    }
}



console.log(add1 (6));
function add1 (num){

    return num + 1
}

const addTwo= function(num){
    return num + 2
}
console.log(addTwo (6));
