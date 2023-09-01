const user = {
    username: "Akash",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

user.welcomeMsg();
user.username = 'sam';
user.welcomeMsg();
// console.log(this);

const chai = () => {
    let username = "akash"
    console.log(this.username);
    console.log(this);
}

chai();

// const addTwo = (num1, num2) => {
//     return num1+num2;
// }

// const addTwo = (num1, num2) => num1+num2;
const addTwo = (num1, num2) => (num1+num2);
console.log(addTwo(3,4));