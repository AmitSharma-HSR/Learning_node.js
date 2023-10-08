let adate = new Date(2019, 11, 5)
// console.log(adate);
// console.log(adate.toDateString());
// console.log(adate.toISOString());
// console.log(adate.toJSON());
// console.log(adate.toLocaleDateString('en-IN'));
// console.log(adate.getFullYear())

let newdate = new Date("2022-01-14")
// console.log(newdate.toLocaleString());
 let timestamp= Date.now()
console.log(timestamp);
console.log(newdate.getTime());
console.log(Math.round(Date.now()/1000)); //time to second

console.log(newdate.toLocaleString('default', {
    day:"2-digit"
}));
