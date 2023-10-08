const myvillen = ["gundaswami", "mugembo", "shakal"];
const my_heros = ["krish", "tufan", "mr.india" ];

// myvillen.push(my_heros)
// console.log(myvillen)

// const patchup = myvillen.concat(my_heros)
// console.log(patchup);
let patchup = [...my_heros, ...myvillen] // sapred
// console.log(patchup);

let superarray = [1,2,3,4,[5,6,7],8,[9,0,9,8],7,[6,[5,4],1],0]
// console.log(superarray.flat(Infinity));

console.log(Array.isArray("amit"));
console.log(Array.isArray(Array.from("amit")));
console.log(Array.from("amit"));
console.log(Array.from({name:"amit"})); //interting

let score1 = 500
let score2 = 501
let score3 = (score1+200)
// console.log(score3)

console.log(Array.of(score1, score2, score3));
