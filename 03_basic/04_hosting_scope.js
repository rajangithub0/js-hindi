//document object model --dom html page manipulation with javascript
//hosting scope

//nexted scope
// function one() {
//     const userName = "rajan";
//     function two() { 
//         const website = 'rajan.com';
//         console.log(`${userName}`);
        
//     }
//     // console.log(`${website}`);
//     // two();
// }
// one();

if (true) {
    const userNAme = "rajan";
    if (userNAme === "rajan") {
        const website = ' rajan.com'
        // console.log(`${userNAme} ${website}`);
    }
    // console.log(`${website}`); // ReferenceError: website is not defined
}
// console.log(`${userNAme}`); // ReferenceError: userNAme is not defined


//-------------------interesting part-------------------


// console.log(addOne(5));
// function declaration
// function addOne(num) {
//     return num + 1;
// }

addTwo(5);
const addTwo = function (num) { //expression
    return num + 2;
}

