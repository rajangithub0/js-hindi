class User{
    constructor(username) {
        this.username=username
    }
    logMe() {
        console.log(`username :${this.username}`);
        
    }

    static createId() {
        return `123`
    }
}

const rajan = new User('Rajan')

// console.log(rajan.createId());


class Teacher extends User{
    constructor(username, email) {
        super(username)
        this.email=email
    }
}

const pen=new Teacher('ekaansh','ekaansh@google.com')

console.log(pen.createId())
