// for each

const myarrey = ["robot", "jailer", "mard", "tirnga"]

// function printMe (print) {
    // console.log(print);
// }
// myarrey.forEach ( function ( allMovie ) {
//     console.log(allMovie);
// } )
// myarrey.forEach ( ( allMovie ) => {
//     console.log(allMovie);
// } )

// myarrey.forEach(printMe);

// myarrey.forEach ( function (string, index, array){
//     console.log(string, index, array);
// }
// )


let myMobiles = [ {
    DeviceName: "xiaomi",
    model: "11i Hypercharge"
},
{
    DeviceName: "apple",
    model: "iphone 16"
},
{
    DeviceName: "nokia",
    model: "1100"
}
]

myMobiles.forEach( (string)=>{

    console.log(`Device Name ${string.DeviceName} and modelName ${string.model}`)

})

