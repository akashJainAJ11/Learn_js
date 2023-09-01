// Nullish Coalescing operator (??): null undefined


let val1 = 5 ?? 10;
let val2 = null ?? 10;
let val3 = undefined ?? 5;
let val4 = null ?? 5 ?? 10;

// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);


// Terniary operator

// condition ? true : false;

const iceTea = 100;
// iceTea >= 80 ? console.log("less than 80") : console.log("more than 80");



// High Order Array loops

// for of

const arr = [1, 2, 3, 4, 5]
for(const num of arr){
    // console.log(num);
}

// Maps

const map = new Map();
map.set('IN',"INDIA");
map.set('USA',"AMERICA");
map.set('Fr',"FRANCE");

// console.log(map);

// for (const key of map){
//     console.log(key);
// }

for (const [key, value] of map){
    // console.log(key,':=',value);
}


// for in

const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for (const key in myObj) {
//     console.log(key);
// }

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "cpp", "rb", "py", "java"];
for (const key in programming){
    // console.log(`${key} , ${programming[key]}`);
}

// for each
const coding = ["js", "cpp", "py", "java", "ruby"];

// coding.forEach( function (item) {
//     console.log(item);
// })

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = num.filter( (num) => num > 4);
const newNum = num.filter( (num) => {
    return num > 4;
});
console.log(newNum);


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newMyNum = myNum
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)
console.log(newMyNum);

// reduce

const number = [1, 2, 3]

const total = number.reduce(function(acc, currval){
    return acc+currval
}, 0)
console.log(total);