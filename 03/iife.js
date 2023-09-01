// Immediately Invoked Function Expressions (IIFE)

(function one(){
    console.log('DB CONNECTED');
})();

( (name) => {
    console.log(`DB CONNECTED ${name}`);
})('akash');