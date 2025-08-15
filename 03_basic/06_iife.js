//immediately invoked function expression (IIFE)
//when right after the function declaration, we add () to invoke it immediately
//it is used to avoid polluting the global scope with variables
//iife function after invoking end with semicolon.
 // normal fucntion declaration
function hello() {
    console.log("Hello, World!");
    
}
hello();
//it is a function that runs as soon as it is
// some time problam form the global scope so that reason used iife.
// named function IIFE
(function myFunction() {
    console.log("This function runs immediately!");
})();
// first paratheses is for function declaration
// second paratheses is for invoking the function immediately

//arrow function IIFE( unnamed iife function)
(() => {
    console.log("This arrow function runs immediately!");
})();

// IIFE with parameters
((name) => {    
    console.log(`Hello, ${name}!`);
})("Rajan"); // passing "Rajan" as an argument

// IIFE with return value       
const result = ((num1, num2) => {
    return num1 + num2;
})(5, 10); // passing 5 and 10 as arguments

// if write two iife function in a file then after one iife function end with semicolon
