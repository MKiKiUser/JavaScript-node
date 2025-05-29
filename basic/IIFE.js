//Immediately Invoked Function Expressions(IIFE)

(function chai()
//named IIFE
{
    console.log(`DB CONNECTED`)
})();

( (name) => {
    console.log(`db connection ${name}`)
})('sonali')