const tinderUser = new Object(); // this is singleton object creation
// tinderUser.name = "rajan";

tinderUser.id = '123abc';
tinderUser.name = "rajan";
tinderUser.age = 27;
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // { name: 'rajan' } // this is object literal creation
// console.log(typeof tinderUser); // object



// const regularUser = {
//     email: "some@gmail.com",
//     fullName: {
//         userFullName:{
//             firstName: "rajan",
//             lastName: "rajput"
//         }
//     }
// }

// console.log(regularUser.fullName.userFullName.firstName); // rajan
// console.log(regularUser.fullName.userFullName.lastName); // rajput
// console.log(regularUser.fullName.userFullName); // { firstName: 'rajan', lastName: 'rajput' }
// console.log(regularUser); // email: 'some@gmail.com',
//     fullName: { userFullName: { firstName: 'rajan', lastName: 'rajput' } }
// }
// console.log(regularUser.fullName.userFullName.firstName); // rajan
// console.log(regularUser.fullName.userFullName.lastName); // rajput
// console.log(regularUser.fullName.userFullName); // { firstName: 'rajan', lastName: 'rajput' }
// console.log(regularUser.fullName.userFullName); // { firstName: 'rajan', lastName: 'rajput' }





// const obj1 = {1:"a",2:"b",3:"c"};
// const obj2 = { 4: "d", 5: "e", 6: "f" };
// const obj4 = { 7: "g", 8: "h", 9: "i" };
// const obj5 = { ...obj1, ...obj2, ...obj4 }
// console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f', '7': 'g', '8': 'h', '9': 'i' }


// const obj3 = { obj1, obj2 }; // object destructuring
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b', '3': 'c' }, obj2: { '4': 'd', '5': 'e', '6': 'f' } }
// const obj3 = Object.assign({},obj1, obj2,obj4); // Object.assign method to merge objects
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f', '7': 'g', '8': 'h', '9': 'i' }

const users = [
    {
        name: "rajan",
        age: 27,
        email: "rajan@gmail.com"
    }, {}, {}, {}, {}
]
users[1].email
console.log(Object.key(tinderUser)); // ['id', 'name', 'age', 'isLoggedIn']
console.log(Object.values(tinderUser)); // ['123abc', 'rajan', 27, false]
console.log(Object.es(tinderUser)); // [['id', '123abc'], ['name', 'rajan'], ['age', 27], ['isLoggedIn', false]]
ntrie
console.log(tinderUser.hasOwnProperty('name')); // true
console.log(tinderUser.hasOwnProperty('email')); // false


//-----------------------object methods-----------------------

// const person = { name: "Rajan", age: 25 };
// console.log(Object.keys(person));
// Output: ['name', 'age']


// const person = { name: "Rajan", age: 25 };
// console.log(Object.values(person));
// Output: ['Rajan', 25]


// const person = { name: "Rajan", age: 25 };
// console.log(Object.entries(person));
// Output: [['name', 'Rajan'], ['age', 25]]


// const target = { a: 1 };
// const source = { b: 2 };
// Object.assign(target, source);
// console.log(target);
// Output: { a: 1, b: 2 }


// const obj = { name: "Rajan" };
// Object.freeze(obj);
// obj.name = "John";
// console.log(obj);
// Output: { name: "Rajan" }


// const obj = { name: "Rajan" };
// Object.seal(obj);
// obj.name = "John";
// obj.age = 30; // will not be added
// console.log(obj); 
// Output: { name: "John" }


// const obj = { name: "Rajan" };
// console.log(Object.hasOwn(obj, "name"));
// Output: true


// const obj = Object.create({}, {
//     a: { value: 1 },
//     b: { value: 2, enumerable: true }
// });
// console.log(Object.getOwnPropertyNames(obj));
// Output: ['a', 'b']


// console.log(Object.is(NaN, NaN));
// true
// console.log(Object.is(0, -0));
// false


// const obj = {};
// Object.defineProperty(obj, 'name', {
//     value: 'Rajan',
//     writable: false
// });
// console.log(obj.name);
// Output: 'Rajan'
// obj.name = "John";
// console.log(obj.name);
// Output: 'Rajan' (unchanged)


// const obj = {};
// Object.defineProperties(obj, {
//     name: { value: "Rajan" },
//     age: { value: 25 }
// });
// console.log(obj);
// Output: { name: 'Rajan', age: 25 }


// const person = {
//     greet() {
//         return "Hello";
//     }
// };
// const raj = Object.create(person);
// console.log(raj.greet());
// Output: 'Hello'


// const entries = [['name', 'Rajan'], ['age', 25]];
// const obj = Object.fromEntries(entries);
// console.log(obj);
// Output: { name: 'Rajan', age: 25 }


// const obj = {};
// console.log(Object.getPrototypeOf(obj));
// Output: {} or Object.prototype


// const animal = { eats: true };
// const rabbit = {};
// Object.setPrototypeOf(rabbit, animal);
// console.log(rabbit.eats);
// Output: true

