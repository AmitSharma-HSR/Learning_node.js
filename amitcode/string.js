const name = "amit";
const age = 23;
// console.log(name[0]);
// console.log(name.toUpperCase());
// console.log(name + age); old comcatinet method

// console.log(`my name is amit ${name} and my age ${age}`); // use like mordern style log(` ${}`)

const mysecondname = new String("     mitu,amit,sharma   ");
// console.log(mysecondname);
// console.log(mysecondname[0]);
// console.log(mysecondname.toUpperCase());
// console.log(mysecondname.charAt(3));
// console.log(mysecondname.indexOf('t'));
console.log(mysecondname.substring(0, 2))
console.log(mysecondname.slice(-3, 2))
console.log(mysecondname.trim())
console.log(mysecondname.replace('m', 'j'));
console.log(mysecondname.includes('m'));
console.log(mysecondname.split(','));
console.log(mysecondname.small());
console.log(mysecondname.anchor());