//const score = 400;
//console.log(score);

//const balance = new Number(2500);
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

//const otherNumber = 23.8966;
//console.log(otherNumber.toPrecision(3)); output is 23.9
// const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3)); // output is 124

//const otherNumber = 123.8966;
//console.log(otherNumber.toPrecision(4)) // output is 123.9

//const hundreds = 1000000;
//console.log(hundreds.toLocaleString()) // based on us standred
//console.log(hundreds.toLocaleString('en-IN')) // based on us indian standred




//=----------------------++Math++-----------------------------------------

console.log(Math);
console.log(Math.abs(-4)); //change the negative value into positive value
console.log(Math.round(4.3)); // remove the decimal and output is 4 if after the decimal value is greathenEqualTo 5 value is incresed by one .
console.log(Math.ceil(4.2)); // ceil function used the top value if after the decimal force output is 5
console.log(Math.floor(4.8)); // floor function used the down value if after the decimal greater the five but actual value is not change.
console.log(Math.random())  //random value always value in 0-1
console.log(Math.floor(Math.random() * 10) + 1) //avoid  zero value is coming from 0 floor is remove te after value of the decimal .

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


//nums and math method
// JavaScript Number Methods - Examples and Explanations

// 1. toString()
let num1 = 123;
console.log("toString:", num1.toString()); // "123"

// 2. toFixed(n)
let num2 = 5.6789;
console.log("toFixed(2):", num2.toFixed(2)); // "5.68"

// 3. toExponential(n)
let num3 = 123456;
console.log("toExponential(2):", num3.toExponential(2)); // "1.23e+5"

// 4. toPrecision(n)
let num4 = 123.456;
console.log("toPrecision(4):", num4.toPrecision(4)); // "123.5"

// 5. parseInt()
let str1 = "42px";
console.log("parseInt:", parseInt(str1)); // 42

// 6. parseFloat()
let str2 = "3.14kg";
console.log("parseFloat:", parseFloat(str2)); // 3.14

// 7. isNaN()
console.log("isNaN('abc'):", isNaN("abc")); // true
console.log("isNaN(123):", isNaN(123)); // false

// 8. isFinite()
console.log("isFinite(123):", isFinite(123)); // true
console.log("isFinite(Infinity):", isFinite(Infinity)); // false

// 9. Number.isInteger()
console.log("Number.isInteger(10):", Number.isInteger(10)); // true
console.log("Number.isInteger(10.5):", Number.isInteger(10.5)); // false

// 10. Math.round()
console.log("Math.round(4.5):", Math.round(4.5)); // 5

// 11. Math.floor()
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4

// 12. Math.ceil()
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // 5

// 13. Math.trunc()
console.log("Math.trunc(4.7):", Math.trunc(4.7)); // 4

// 14. Math.abs()
console.log("Math.abs(-9):", Math.abs(-9)); // 9

// 15. Math.max()
console.log("Math.max(10, 20, 30):", Math.max(10, 20, 30)); // 30

// 16. Math.min()
console.log("Math.min(10, 20, 30):", Math.min(10, 20, 30)); // 10

// 17. Math.pow(base, exponent)
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8

// 18. Math.sqrt()
console.log("Math.sqrt(25):", Math.sqrt(25)); // 5

// 19. Math.random()
console.log("Math.random():", Math.random()); // random number between 0 and 1
