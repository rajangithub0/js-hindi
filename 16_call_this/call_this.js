function setUserName(username) {
    //complex db call
    this.username = username
    console.log('called');
    
}

function createUser(username, email, password) {
    setUserName.call(this,username) // outer function called this method call and this inside the function parthies
    this.email = email;
    this.password = password;
}

const us1 = new createUser('raja', 'raja@google.com', "123456")
console.log(us1);
