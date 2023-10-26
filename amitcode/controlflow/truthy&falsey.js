
const userNumber = 1 ;
const userNumber2 = {}
const userNumber3 = []

if (userNumber) {
    console.log("you got a number of user");
    
} else {
    console.log(" you don't have a user number");
    
};

if (Object.keys(userNumber2).length === 0 ) {
    console.log(" your obeject is empty");
    
} else {
    console.log("nothing");
    
}
if (userNumber3.length === 0) {
    console.log(" your arrey is empty");
    
} else {
    console.log("nothing");
    
}


// nullish coelscing operator (??)

let value1 = undefined ?? null

console.log(value1);

// falsy value 

// false,0,null, undefined, "", BigInt 0n, -0, NaN
// truthy Value

// true, "filled string even 0, space",'singlequtedstring', number, Array[], {object}, Infinity, Symbol