// const useremail = "r@gamil.com";
// if (useremail) {
//     console.log("got user email");
// } else {
//     console.log("not got user email");
// }

// falsy value
// false,0,-0,BigInt 0n, "",null,undefined,NaN

//expect all value are truthy except the falsy values
// truthy value
// "0" //inside the string is a zero is truthy
//'false //inside the string is a false is truthy
// " " //inside the string is a space is truthy
//[],{} //empty array and object are truthy
//function(){} //empty function is truthy
//Infinity,-Infinity //both are truthy

// checking the Array
// const arr = [];
// if (arr.length === 0) {
//     console.log("array is empty");

// }

// checking the Object
// const obj = {};
// if (Object.keys(obj).length === 0) {
//     console.log("object is empty");
// }

//nullish coalescing operator (??) is used to check if the value is null or undefined, if it is then it will return the default value.
let val1;
// val1 = 5 ?? 10;
// console.log(val1); // 5, because val1 is undefined, so it will return the default value 10.
// val1 = null ?? 10;
// console.log(val1); // 10, because val1 is null, so it will return the default value 10.

// val1 = undefined ?? 15;
// console.log(val1); // 15, because val1 is undefined, so it will return the default value 15.


// val1 = null ?? 10 ?? 20;
// console.log(val1); // 10, because the first value is null, so it will return the default value 10. The second value is ignored because the first value is not undefined or null.


// terniary operator
// example of terniary operator condition ? true :false;
// const iceTeaPrice = 100;
// iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");

