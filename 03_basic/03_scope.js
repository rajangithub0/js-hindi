//scope of variables

// let a = 10;
// const b = 20;
// var c = 30;

// { }//scope block

// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// console.log(a); // Output: 10
// console.log(b); // Output: 20
// console.log(c); // Output: 30

//if we use let or const inside a block, it will not be accessible outside that block
// console.log(a); // Output: ReferenceError: a is not defined
// console.log(b); // Output: ReferenceError: b is not defined
//if we use var, it will be accessible outside the block
// console.log(c); // Output: 30
// mostly programmer use let and const for block scope variables none of them are accessible outside the block .


let a = 300;

if (true) {
    let a = 10;
    console.log(`Inner a: ${a}`); // Output: Inner a: 10
    // The inner 'a' is accessible here, but it does not affect the outer '
    
}
console.log(a); // Output: 300 (the outer 'a' is accessible here, the inner 'a' is not)
