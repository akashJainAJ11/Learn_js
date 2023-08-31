const mySym = Symbol("key1");

const JsUser = {
    name: "Akash",
    "fullName": "Akash Jain",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "akash@google.com",
    isLoggedIn: false
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullName"]);
console.log(JsUser[mySym]);

JsUser.email = "akash@yahoo.com";
// Object.freeze(JsUser);
JsUser.email = "akash@facebook.com";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Heloo js user")
}
JsUser.greeting2 = function(){
    console.log(`Heloo js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "sunny";
// console.log(tinderUser);

const regularUser = {
    email: "aksh@hdfc.com",
    fulNam: {
        userfullname: {
            firstName: "akash",
            lastName: "Jain"
        }
    }
}
console.log(regularUser.fulNam?.userfullname.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProperty('name'));