//if statement
// if statements are used to execute a block of code based on a condition .if condition is true the block code is executed,
//for example, if you want to check if a number is positive or negative, you can use an if statement.

//operators used in if statements are comparison operators like ==, ===, !=, !==, <, >, <=, >=
//if statement is used to check a condition and execute code based on that condition.
//< less than
//> greater than
//<= less than or equal to
//>= greater than or equal to
//== equal to
// === strict equal to
//!= not equal to
// and !== strict not equal to



// if (true) {
//     console.log("This will always run because the condition is true.");
// }

// if (2 == "2") {
//     console.log("This will run because 2 is equal to '2' (type coercion).");
// }

// if (2 === "2") {
//     console.log("This will not run because 2 is not strictly equal to '2' (no type coercion).");
// }

// const isUserLoggedIn = true;
// const temperature = 41;

// if (temperature === 41) {
//     console.log("less then 50");
// } else {

//     console.log("temputure is greater than 50");
// }

// console.log('executed always');


// const score = 200;
// if (score > 100) {
//     const power = "fly";
//     console.log(`user power is ${power}`);
// }
// console.log(`user power is ${power}`);


//shorthand notation for if statements

// const balance = 1000;
// if(balance>500) console.log("You have enough balance to make a purchase."); // without curly braces called implict scope.
// else console.log("Your balance is too low for this purchase.");

//nested if statements
// if (balance < 500) {
//     console.log("less then 500");
// } else if (balance < 750) {
//     console.log("less then 750");
// } else if (balance < 900) {
//     console.log("less then 900");
// } else {
//     console.log('less then 1200');
// }



const userLoggedIn = true;
const debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
//&& (and operator) is used to check if both conditions are true.
if (userLoggedIn && debitcard && 2 == 2) { //use the && operator check both condition is true the block will execute if one condition is false the block will not execute.
    console.log("allow to buy course.");
}

if (loggedInFromGoogle || loggedInFromEmail) { //|| (or operator) is used to check if at least one condition is true. the block will execute if one condition is true. both condition is false the block will not execute.
    console.log("user logged in from google or email.");
}

