// const promiseone = new Promise(function(resolve, reject){
//     setInterval(function(){
//         console.log("network call complete");
//         resolve()
//     }
//         ,2000);
    
// })
// promiseone.then(function(){
//     console.log("promise consumed"
//     );
// }
// )

// 

const promisefour =new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if (!error){
        resolve({username : 'amit' , email : 'amit@gmail.com'})
    } else {
        reject('Error: somthing went wrong')
    }
                
    }, 1000);
});

promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then ((username)=>{
console.log(username)
}).catch((err)=>{
    console.log(err);
})
.finally(()=>console.log("The Promise resolved or rejected "));

const promisefive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if (!error){
        resolve({username : 'rohit' , email : 'rohit@gmail.com'})
    } else {
        reject('Error: JS went wrong')
    }
                
    }, 1000)}
    );
    async function promiseconsumefive(){
        try {
            let response = await promisefive 
        console.log(response);
        } catch (error) {
            console.log("code was wrong");
            
        }
    }
    promiseconsumefive()

    // async function userdata(){
    //    try {
    //     const response = await fetch('https://api.github.com/users/AmitSharma-HSR')
    //     const data = await response.json()
    //     console.log(data);
    //    } catch (error) { console.log ("e5", error)
    //    }
    // } userdata()

    fetch('https://api.github.com/users/AmitSharma-HSR')
    .then ((response)=>{
        return response.json()
    })   
    .then ((data)=>{
        console.log(data);})
    .catch((error)=> console.log(error));