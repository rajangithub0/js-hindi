// const user={
//     userName:"rajan",
//     price: 999,
//     welcomeMessage: function () { //reference the current context using this keyword
//         console.log(`${this.userName},welcome to website`);

//         console.log(this);
//              // current context means which object is working is called current context.
//     } //this keyword used to not for hard code only for dynamic use ( current context)
// }


// // user.welcomeMessage()
// // user.userName = 'ekaansh'
// // user.welcomeMessage()

// console.log(this); //when we are working a node envrioment this keyword refer the empty object.


// const one= function () {
//     let username = 'rajan'
//     console.log(this.username); // undefined, because this keyword refer the global object and global object does not have username property.
//     console.log(this); // in a function this keyword refer the global object
    
// }
// one(); // in a browser this keyword refer the window object

//arrow function

// const one = () => {
//     let username = 'rajan'
//     console.log(this.username);
// }

// one() // undefined, because arrow function does not have its own this keyword, it refers the parent scope's this keyword.


// const addtwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addtwo(3, 5));


//implicte return

// const addthree = (num1, num2) => num1 + num2; // no need to use return keyword
// const addTwo=(num1,num2)=>(num1+num2)
// console.log(addTwo(3, 5)); // 8

//if we use curly breses write the return keyword
//if we use implicte type not use the write return keyword

//return the object
// if return the object use the paratheses and write the object inside it
// const add = (num1, num2) => ({ name: "rajan" })
// console.log(add(3,5));

const myArray = [1, 2, 3, 4, 5];
myArray.forEach(() => { });
