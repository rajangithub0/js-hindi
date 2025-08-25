const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter return the values
// let newNums = myNums.filter((num) => num > 4)

// it return the implect return
// console.log(newNums);

// let newNums = myNums.filter((nums) => {
//     // if start the scope the use curly breas if i want to return the value write return keyword
//     return nums < 4
// })

// console.log(newNums);

// it return the empty array.

// const myNum = [];

// myNum.forEach((num) => {
//     if (num > 4) {
//         newNum > push(num)
//     }
// })
// console.log(myNum);


const books = [{

},
{},
{},
{},
{},
];

let userbooks = books.filter((bk) => bk.genre === "history")
 userbooks = books.filter((bk) => { return bk.publish >= 2000 && bk.genre==="history" })

console.log(userbooks);
