const discripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(discripter);


const visa = {
    country : 'England',
    price : 10000,
    approved : false,
    applied: function apply(){
        console.log("visa not apllied");
    }
}

console.log(Object.getOwnPropertyDescriptor(visa, "country"));

Object.defineProperty(visa , "price", {
    writable: false,
        enumerable : false
})
console.log(Object.getOwnPropertyDescriptor(visa, "price")); 

for (const [key, value] of Object.entries(visa)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    } else {
        return
    }
    
}