// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter return the values
// let newNums = myNums.filter((num) => num > 4)
// Above line will return all numbers greater than 4 (new array)

// it return the implect return
// console.log(newNums);

// let newNums = myNums.filter((nums) => {
//     // if start the scope the use curly breas if i want to return the value write return keyword
//     return nums < 4
// })
// This will return all numbers less than 4
// console.log(newNums);

// it return the empty array.

// const myNum = [];

// myNum.forEach((num) => {
//     if (num > 4) {
//         newNum > push(num)
//     }
// })
// console.log(myNum);
// ❌ Typo above: should be newNum.push(num), otherwise it won’t work
// forEach does not return a new array, you must push values manually.


// const books = [{
    // Example book objects should go here
// },
// {},
// {},
// {},
// {},
// ];

// Filter books by genre only
// let userbooks = books.filter((bk) => bk.genre === "history")

// Filter books by publish year >= 2000 AND genre = history
userbooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === "history"
})

console.log(userbooks); 


// ----------------------------------------------------------------------------------------------------------

// Example numbers array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ---------------------- FILTER ----------------------
// filter() returns a NEW array containing only elements 
// that satisfy the given condition (predicate function).

// Example: numbers greater than 4
let newNums = myNums.filter((num) => num > 4);
console.log("Numbers > 4 using filter:", newNums);

// Example: numbers less than 4
newNums = myNums.filter((num) => {
    // if we use curly braces {}, we must write 'return'
    return num < 4;
});
console.log("Numbers < 4 using filter:", newNums);


// ---------------------- FOREACH ----------------------
// forEach() does NOT return a new array.
// Instead, we must push elements manually into another array.

const newNums2 = [];
myNums.forEach((num) => {
    if (num > 4) {
        newNums2.push(num);   // ✅ correct usage of push
    }
});
console.log("Numbers > 4 using forEach:", newNums2);


// ---------------------- OBJECT FILTERING ----------------------
const books = [
    { title: "Book One", genre: "history", publish: 1999 },
    { title: "Book Two", genre: "fiction", publish: 2005 },
    { title: "Book Three", genre: "history", publish: 2010 },
    { title: "Book Four", genre: "science", publish: 1995 },
    { title: "Book Five", genre: "history", publish: 2021 }
];

// Filter all books with genre = "history"
let userbooks = books.filter((bk) => bk.genre === "history");
console.log("All History Books:", userbooks);

// Filter only history books published in or after 2000
userbooks = books.filter((bk) => bk.publish >= 2000 && bk.genre === "history");
console.log("History Books after 2000:", userbooks);
