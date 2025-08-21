// for of loop

// [ '','','']
// [{},{},{},{}]

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "hello world";
// for (const greet of greeting) {
//     if (greet == " ") {
//         break;
//     }
//     console.log(`each char is ${greet}`);
// }


//maps

// const map = new Map()
// map.set('IN', "india");
// map.set('eng', "england");
// map.set('FR', "france");
// map.set('IN','india') // donot add the duplicate value add into the map


// console.log(map);
// for  of loop woking in map when write the only key it access the whole object
// for (const key of map) {
//     console.log(key);
// }

// for (const [key,value] of map) {
//     console.log(`${key} :-${value}`);
// }

//imp array are only ilteration for of loop.

//object of map

const myObj = {
    'game1': 'nfs',
    'game2': "countra"
}

//this for of method is not working of object.
// for (const [key, value] of myObj) {
//     console.log(`${key}:-${value}`);
// }