// shopping card for add the prodcur in the cart and array
//... called spread operator and rest operator its totally depends on the situation(context).

// function calculateCartPrice(...num1) { //rest operator
//     return num1;
// }

// console.log(calculateCartPrice(200,400,500)); //output:-[ 200, 400, 500 ]


function calculateCartPrice(val1,val2,...num1) { //rest operator
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 780, 345, 456, 434)); //output:-[ 500, 780, 345, 456, 434 ] first twocal


// parameters are val1 and val2, rest parameter num1 will take all the remaining arguments
// in the form of an array. So, the output will be an array containing all the

const user = {
    userName: 'rajan',
    price:299
}

//obect pass in function and use in function
function handleObject(anyObject){
    console.log(`Username os ${anyObject.userName} and price is ${anyObject.price}`);   
}
// handleObject(user); //output:-Username Is rajan and price is 299
handleObject({ userName: 'monika', price: 399 }); //output:-Username os monika and price is 399



const myNewArray = [200, 300, 400, 600];
// the function return second value of the array
// using the array index to access the second value
function returnSecondValue(getArray) {
    return getArray[1]; // returns the second value of the array
}

// returnSecondValue(myNewArray); //output:-300
console.log(returnSecondValue([100, 500, 1000, 1500])); //output:-500


