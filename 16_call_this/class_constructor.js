//es6 after

// class User{
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUserName() {
//         return `${this.username.toUppercase()}`
//     }

// }

// const user = new User('rajan', 'rajan@google.com', 'eisu1233')
// console.log(user.encryptPassword());
// console.log(user.changeUserName());

//behind the scene

function User(username,email,password) {
    this.username = username;
    this.email = email;
    this.password=password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User.prototype.changeUserName = function () {
    return `${this.username.toUppercase()}`
}

const us2 = new User('eisu', 'eisu@google.com', '234443')

console.log(us2.encryptPassword());
console.log(us2.changeUserName());

