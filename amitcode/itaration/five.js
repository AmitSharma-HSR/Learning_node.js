// const myarrey = ["robot", "jailer", "mard", "tirnga"]

// const modifiedArray= []
// myarrey.forEach ( (string)=> { 
//     if ( string === "robot") {
//     modifiedArray.push(string)
// }
// } )
// console.log(modifiedArray);

let score = [5,6,7,8,9,2,3,4]

// let value = score.filter ((string)=> string >= 5 )
// // console.log(value)
// let value = score.filter ((string)=> {
//     return string < 4
  
// } )
// console.log(value)

let myMobiles = [ 
    {    DeviceName: "xiaomi",   model: "11i Hypercharge", price: 23000},
    {    DeviceName: "apple",   model: "iphone15", price: 80000},
    {    DeviceName: "apple",   model: "iphone14", price: 60000},
    {    DeviceName: "xiaomi",   model: "note 9", price: 16000},
    {    DeviceName: "realme",   model: "u1", price: 11000},
    {    DeviceName: "poco",   model: "12pro", price: 19000},
    {    DeviceName: "oppo",   model: "f29", price: 34000},
    {    DeviceName: "vivo",   model: "v29", price: 39000},
    {    DeviceName: "Infinix",   model: "c30", price: 14000},
    {    DeviceName: "Redmi",   model: "12 pro", price: 19500},
    {    DeviceName: "realme",   model: "GT9", price: 26999},
    {    DeviceName: "samsung",   model: "m20", price: 11000},
]

let phone = myMobiles.filter( (MB) => MB.price >19000 && MB.DeviceName === "Redmi")
console.log(phone);