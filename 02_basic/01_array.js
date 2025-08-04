// // array

// const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ] // array index start from 0
// console.log(myArr[2]); // 2 array  denote  with squre bricket


// const hands = ['monika', 'ekaansh', 'rajan']
// console.log(hands); //[ 'monika', 'ekaansh', 'rajan' ] // array can store any data type like number string boolean array like this

// const arr = new Array(1, 2, 3, 4, 5, 6) // define with new keyword array.

// console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]
// console.log(typeof arr);//object
// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(typeof myArr); //object

const myArr = [0, 1, 2, 3, 4, 5];

// myArr.push(6)// add the new index value of 6 end of the array.
// console.log(myArr);[0, 1, 2, 3,4, 5, 6]
// myArr.pop() // remove the last index .
// console.log(myArr);[0, 1, 2, 3, 4, 5]

// myArr.unshift(0); // pass the argurement which you added
// console.log(myArr); // add a new index start from the array but it effect on all array index .no requrmined to use.
// [
//     0, 0, 1, 2,
//     3, 4, 5
// ]
// myArr.shift() // no need to pass the arugement
// console.log(myArr);
// [0, 1, 2, 3, 4, 5]


// console.log(myArr.includes(9)); // false include method return true and false . if argurement present into the array it gives true  otherwise false.

// console.log(myArr.indexOf(9)) //if value is not exited in the array it return -1 if  value is exit in the array it return the index of array.


// const newArr = myArr.join() //method  of join array  into string

// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(typeof myArr); //object
// console.log(newArr); //0,1,2,3,4,5
// console.log(typeof newArr); //0,1,2,3,4,5



//importment method slice and splice

console.log("ORINIGAL", myArr); // ORINIGAL[0, 1, 2, 3, 4, 5]
const mya1 = myArr.slice(1, 3);
//Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.  it didnot count the last argurement passed.
console.log("SLICE", mya1);//SLICE [ 1, 2 ]
console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]
const mya2 = myArr.splice(1, 3);
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
console.log("SPLICE", mya2); //SPLICE[1, 2, 3]
console.log(myArr); //[0, 4, 5] with the splice method oringal array is refected.


//array all methods
// ARRAY METHODS EXAMPLES

// Original Array
const arr = [1, 2, 3, 4, 5];

// 1. push() - Adds to end
arr.push(6);
console.log("push:", arr); // [1, 2, 3, 4, 5, 6]

// 2. pop() - Removes from end
arr.pop();
console.log("pop:", arr); // [1, 2, 3, 4, 5]

// 3. unshift() - Adds to start
arr.unshift(0);
console.log("unshift:", arr); // [0, 1, 2, 3, 4, 5]

// 4. shift() - Removes from start
arr.shift();
console.log("shift:", arr); // [1, 2, 3, 4, 5]

// 5. concat() - Combine arrays
const arr2 = [6, 7];
const combined = arr.concat(arr2);
console.log("concat:", combined); // [1, 2, 3, 4, 5, 6, 7]

// 6. join() - Convert to string
console.log("join:", arr.join("-")); // "1-2-3-4-5"

// 7. slice() - Extract a portion
console.log("slice:", arr.slice(1, 4)); // [2, 3, 4]

// 8. splice() - Add/remove in-place
arr.splice(2, 1, 99);
console.log("splice:", arr); // [1, 2, 99, 4, 5]

// 9. indexOf()
console.log("indexOf 4:", arr.indexOf(4)); // 3

// 10. includes()
console.log("includes 2:", arr.includes(2)); // true

// 11. reverse()
console.log("reverse:", [...arr].reverse()); // [5, 4, 99, 2, 1]

// 12. sort()
const unsorted = [3, 1, 4, 2];
unsorted.sort();
console.log("sort:", unsorted); // [1, 2, 3, 4]

// 13. map()
const mapped = arr.map(x => x * 2);
console.log("map:", mapped); // [2, 4, 198, 8, 10]

// 14. filter()
const filtered = arr.filter(x => x > 3);
console.log("filter:", filtered); // [99, 4, 5]

// 15. reduce()
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log("reduce:", sum); // 111

// 16. forEach()
console.log("forEach:");
arr.forEach((x, i) => console.log(`Index ${i}: ${x}`));

// 17. find()
const found = arr.find(x => x > 3);
console.log("find:", found); // 99

// 18. findIndex()
const findIdx = arr.findIndex(x => x === 99);
console.log("findIndex:", findIdx); // 2

// 19. every()
console.log("every > 0:", arr.every(x => x > 0)); // true

// 20. some()
console.log("some > 100:", arr.some(x => x > 100)); // false

// 21. flat()
const nested = [1, [2, [3]]];
console.log("flat:", nested.flat(2)); // [1, 2, 3]

// 22. flatMap()
const flatMapped = [1, 2, 3].flatMap(x => [x, x * 2]);
console.log("flatMap:", flatMapped); // [1, 2, 2, 4, 3, 6]

// 23. Array.isArray()
console.log("isArray:", Array.isArray(arr)); // true

// 24. fill()
console.log("fill:", [1, 2, 3].fill(0)); // [0, 0, 0]

// 25. copyWithin()
const copyArr = [1, 2, 3, 4, 5];
copyArr.copyWithin(1, 3);
console.log("copyWithin:", copyArr); // [1, 4, 5, 4, 5]







