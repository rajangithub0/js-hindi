// function sayMyName() {
//     console.log("r");
//     console.log("a");
//     console.log("j");
//     console.log("a");
//     console.log("n");
// }
// console.log(sayMyName());
// sayMyName();
// Output://r
// a
// j
// a
// n

// function addTwoNumber(number1,number2){ // inside the round brackets we can call parameters.
//     console.log(number1 + number2);
// }

// addTwoNumber(20, 30);// when we call the function inside the round  brackets we can call arguments.
// addTwoNumber(20, 30);   // Output: 50
// addTwoNumber(20, 30, 40); // Output: 50 (ignores the third argument)
// addTwoNumber(20); // Output: NaN (not a number, since second argument is missing)
// addTwoNumber(20, "AA"); // Output: 20AA (concatenates number and string)
// addTwoNumber(20, "AA") will concatenate the number and string
// addTwoNumber(20,null); // Output: 20 (concatenates number and null)
// addTwoNumber(20, undefined); // Output: NaN (not a number, since second argument is undefined)

function addTwoNumber(number1, number2) { // inside the round brackets we can call parameters.
    // let result = number1 + number2; // This will add the two numbers
    // return result; // This will return the result of the addition
    // console.log("rajan"); // This will print "rajan" to the console
    // The return statement will exit the function and return the result    
    //console.log("rajan"); // This line will not execute because it is after the return statement
    // If you want to print something, it should be before the return statement
    return number1 + number2;
}
const result = addTwoNumber(20, 30); // This will not print anything because the function does not return a value
// console.log("result",result); // Output: undefined (since the function does not return anything)


function loginUserMassage(username) {
    //if(!username) 
    if (username===undefined) {
      console.log("please enter a username");
        return;
    }
    return `User logged in with username ${username}`; // This will return a string with the username
}

console.log(loginUserMassage()); // Output: User logged in with username rajan


// console.log(loginUserMassage("rajan")); // Output: User logged in with username rajan
// console.log(loginUserMassage("rajan", "1234")); // Output: User logged in with username rajan (the second argument is ignored)


