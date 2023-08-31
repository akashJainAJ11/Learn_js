// array

const myarr = [0, 1, 2, 5, "akash"];
console.log(myarr);

// array methods
myarr.pop();
myarr.push(66);

myarr.unshift(9)


console.log(myarr.includes(9));
console.log(myarr.indexOf(9));

const newArr = myarr.join();
console.log(myarr);
console.log(typeof newArr);

// slice, splice

console.log("A", myarr);
const myn1 = myarr.slice(1,3);

console.log(myn1);
console.log("B", myarr);

const myn2 = myarr.splice(1,3);
console.log("C", myarr);
console.log(myn2);

const my1 = [1, 3, 5, 7];
const my2 = [2, 4, 6, 8];

// const my3 = my1.concat(my2);
const my3 = [...my1, ...my2];
console.log(my3);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("akash"));
console.log(Array.from("akash"));
console.log(Array.from({name:"akash"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));