// const myArr = []
//     % DebugPrint(myArr)

// #continious array and packed 


// #holey array

//smi (small integer)
// packed element
//doble (float,string,function)


//any data type store in array is called element


const arrTwo = [1, 2, 3, 4, 5]
//type of array packed array #smi element
//it is best type of  array
// store only number evem not decimeal
arrTwo.push(0.6)
// after pushing element inside the array
//it change and called packed double element

arrTwo.push('7')
//packed elements called


arrTwo[10] = 11
//holy elements
console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);


//it any element check inside  the array for any position first check is called is bound check
// bound check
//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo.prototype,9)

const arrThree = [1, 2, 3, 4, 5]    
console.log(arrThree[2]);

// countinous{
//smi height optimized
//double second optimized
//packed thrid optimized
// }


// holey{
// hole _smi only for interger
//double _smi float,string,function
//packed _smi interger and string are both
// }

//if any down fall in this not upgrade impossible to again updation

const arrFour = new Array(3)

//just 3 three holes // holey _smi _elements

//move to downgrid
arrFour[0] = '1' //holey_element
arrFour[1] = '2' //holey_element
arrFour[2] = '3' //holey_element


const arrFive = []
arrFive.push("1") //packed element
arrFive.push("2") //packed element
arrFive.push("3") //packed element


const arrSix = [1, 2, 3, 4, 5, 6] // single packed element
arrSix.push(NaN, Infinity) //move to double packed element
// if one move to double packed element not downgrid to single packed

//for, for-of, forEach
//method preferd used