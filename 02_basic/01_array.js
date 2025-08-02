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









