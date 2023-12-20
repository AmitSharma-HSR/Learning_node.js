const promiseone = new Promise(function(resolve, reject){
    setInterval(function(){
        console.log("network call complete");
        resolve()
    }
        ,2000)
    
})
Promise.then(function(){
    console.log("promise consumed"
    );
}
)