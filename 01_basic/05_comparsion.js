// comparsion of logical operation
//console.log(2 < 1); // false //less then 
//console.log(2 <= 1); // false //less then or equal to
//console.log(2 > 1); // true //greater then
//console.log(2 >= 1); // true //greater then or equal to
//console.log(2 == 2); // true // equal to
//console.log(2 == 1); // false // equal to
//console.log(2 != 2); // false // not equal to
//console.log(2 != 1); // true // not equal to
//console.log(2 === 2); // true // strict equal to
//console.log(2 === 1); // false // strict equal to
//console.log(2 !== 2); // false // strict not equal to
//console.log(2 !== 1); // true // strict not equal to


// comparsion of logical operation with string
//console.log("2" > 1); // true // string is converted to number
//console.log("02" < 1); // false // string is converted to number
//console.log("2" == 2); // true // string is converted to number
//console.log("2" === 2); // false // strict equal to, no conversion
//console.log("2" != 2); // false // string is converted to number
//console.log("2" !== 2); // true // strict not equal to, no conversion

//console.log(null > 0); // false, null is converted to 0
//console.log(null >= 0); // true, null is converted to 
//console.log(null == 0);  // false, null is not equal to 0


//console.log(undefined > 0); // false, undefined is not a number
//console.log(undefined <= 0); // false, undefined is not a number
//console.log(undefined == 0); // false, undefined is not equal to 0
//console.log(undefined == null); // true, undefined is equal to null
//console.log(undefined === null); // false, strict equality, no conversion

// === is checking for strict check it check value and data  type also. 

console.log("2" == 1); // false, string is not equal to number
console.log("2" === 1); // false, strict equality, no conversion


// always use === and !== for comparsion to avoid type coercion issues
// use == and != only when you are sure about type coercion
// for example, when comparing null and undefined, use == or !=
//always avoid to checking the null and undefined with == and != due to create confusion
// use === and !== for strict equality check
// use == and != for loose equality check, but be careful with type coercion
