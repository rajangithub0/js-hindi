class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`username is ${this.username}`);
    }
}

class teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = username
    }

    addCourse() {
        console.log(`a new course was added by ${this.username}`);

    }
}

const tech1 = new teacher('rajan', 'rajan@licindia.com', '12345')

tech1.addCourse()
tech1.logMe()
const tech2 = new User('monika')
tech2.logMe('monika')

// console.log(tech1 instanceof tech2);
console.log(tech1 instanceof User);
