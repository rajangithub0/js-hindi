//reduce

const mynums = [1, 2, 3];

// const mytotal = mynums.reduce(function (acc, currval) {
//     console.log(`acc:${acc} and currval:${currval}`);

//     return acc + currval;
// }, 0)

// const mytotal = mynums.reduce((acc, curr) => acc + curr, 0)
// console.log(mytotal);


//shopping cart

const shoppingCart = [
    {
        course: 'javascript',
        price: 2999
    },
    {
        course: 'python',
        price: 999
    },
    {
        course: 'mobile dev',
        price: 5999
    },
    {
        course: 'data scince',
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
