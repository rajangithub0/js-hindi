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
