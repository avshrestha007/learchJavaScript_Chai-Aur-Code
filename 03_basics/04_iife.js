// Immediately Invoked Function Expressions (ITFE)

(function Chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})(`Avinash`)