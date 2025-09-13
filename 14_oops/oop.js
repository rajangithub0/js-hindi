// const user1 = {
//     username: 'rajan',
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function () {
//         // console.log('got user datails from database');
//         // console.log(`username:${this.username}`);
//         // console.log(this);


//     }
//     //this keyword used for current context

// }
// console.log(this);


// console.log(user.username);
// console.log(user.getUserDetails());

//constuctor function

//new keyword is a constuctor function make a new 
// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.userName = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`welcome${this.userName}`);
        
    }

    return this;
}

const userOne = new User('rajan', 12, true)
const userTwo = new User('ekaansh', 24, false)
console.log(userOne.constructor);
// console.log(userTwo);

//new key
//when used a new keyword it create a new empty object.it called instance.
//step2:the constructor function called with the help of new keyword all argurement pack into one and return
//step3: all values are inject into new function argurement
//step4:and display