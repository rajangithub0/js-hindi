// change the pi value

const discipt = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(discipt);


// console.log(Math.PI)

const myobj = Object.create(discipt)
// console.log(myobj);

const obj = {
    name: 'rajan',
    price: 400000,
    isAviable: true,

    orderobj: function () {
        console.log('code break');

    }
}

// console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
Object.defineProperty(obj, "name", {
    writable: false,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

for (const [key, value] of Object.entries(obj)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);
    }

}