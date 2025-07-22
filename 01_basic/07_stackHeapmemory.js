//two types datatype is aviable in js
//primitive datatype are call by value string, number, boolean, null, undefined, symbol, BigInt
//non-primitive datatype are call by referance function, array, object

//primitive type data type used stack memory . if any variable define in primitive datatype  it provide copy of variable. original data is not effective.
//example of stack memory
let userName = 'ekaansh';
let anotherUserName = userName;
anotherUserName = 'monika';

// console.log(userName);
// console.log(anotherUserName);

//non-primitive data type used heap memory . if any varibale define in non-primitive datatype it provide the referance of variable . original data is effective.

let userOne = {
    email: 'rajan@kunatumpapers.com',
    salary: 230000,
}

let userTwo = userOne;

userTwo.email = 'rajan@insfoys.com'

console.log(userOne.email);
console.log(userTwo.email);

