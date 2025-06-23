let score = null;

// console.log(typeof score);
// console.log(typeof ('score'));  // both method is checked the data typeof.

let valueInNumber = Number(score);

// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN


// NaN => not a number.

// "33"=> 33
// "33aabc"=> NaN but type is number.
// true => 1
// false => 0
// null =>0
// undefined => NaN


let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

//boolen conversion
// ""=> false
// 1=> true
// 0=> false
// "rajan"=> true // string conversion is empty 0 but is 1.

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(someNumber);  // output 33 is number 
console.log(typeof stringNumber); // but this type is string.


