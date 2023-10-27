//loops

for (let i = 0; i <= 16; i++) {
    const element = i;

    if (element == 5) {
        // console.log("you win");
    }
    // console.log(element);
}

for (let i = 2; i < 8; i++) {
    // console.log(`innerloop ${i}`);
    for (let j = 2; j < 8; j++) {
        // console.log(`innerloop ${j} outerloop ${i}`);
        // console.log(i + "*" + j + " = " + i*j  );
    }
    
}

// const myArrey = ["amit", "rohit", "pawan"]
// console.log(myArrey.length);
// for (let index = 0; index < myArrey.length; index++) {
//     const element = myArrey[index];
//     console.log(element);
    
// }

// break or continue

for (let i = 1; i < 15; i++) {
if ( i === 5) {
    console.log( `5 Detected`);
    break 
}

    console.log(i)
    
}
for (let i = 1; i < 15; i++) {
if ( i === 5) {
    console.log( `5 Detected`);
    continue
}

    console.log(i)
    
}