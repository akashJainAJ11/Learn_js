function sayMyName(){
    console.log("A");
    console.log("k");
    console.log("a");
    console.log("s");
    console.log("h");
}
//sayMyName();

function addTwoNumber(num1, num2){
    console.log(num1+num2);
}

// addTwoNumber(7, 8);
// addTwoNumber(7, "8");
// addTwoNumber("7", 8);
// addTwoNumber(7, "a");

function loginUserMessage(username='sunny'){
    if(!username){
        console.log("Please enter a username")
        return 0;
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())


function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "akash",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);