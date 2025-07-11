// data type are  define into two parts only primitive and non primitve

//primitive  or call by value
// primitive datetype are baiscially seven. it is call by value when somewhere call and using donot give oringal address only give copy data. when you change in the data oringal data is same only chnage in copy.
// seven category shown below datatype
//string
//number
//boolean
// null
//undefined
//big int // store the large number end of  number n write.
// example of 
let num = 12343534534n;
//symbol // using in react and advance javascript main purpose is symbol is unqiue
//example of symbol

const id = Symbol('123');
const anotherId = Symbol('123');
//non primitive or call by refercnce

//Array

const arr = ["apple", "pineapple", "bannana", 1, 2, 3, 4, [1, 2, 3, 4]]
//Objects
const obj = {
    name: "rajan",
    address: {

    },
    salary: []
}

//Function

//function are treat as a variable and normal function.

const myfunction = function () {
    console.log("hello world");
}

function add() {
    console.log(2 + 8);
}

// function is typeof is called objectfunction.


//java script is a dyanmic type language.

//if any variable knows the datatype use the typeof
//example the known the data type
console.log(typeof myfunction);
console.log(typeof id);
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof num);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memory allocation in datatype
// memory allocation in datatype is very important concept in javascript.
// primitive data type and non primitive data type memory allocation is different.
// primitive data type store in stack memory and non primitive data type store in heap memory.
// primitive data type using as stack memory location . when create a data primitive datatype it gives copy of data and store in memory location.
// when you change the data it only change in copy not in original data.
// non primitive data type using as heap memory location. when create a data non primitive datatype it gives address of data and store in memory location.
// when you change the data it change in data orinigal data will change. because it is reference type.
console.log("memory allocation in datatype");