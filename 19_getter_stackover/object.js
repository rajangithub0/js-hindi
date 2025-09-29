const User = {
    _email: 'rajan@google.com',
    _password: 'abcde',
    
    get email() {
      return this._email.toUpperCase()  
    },
    set email(value) {
       this._email=value 
    }
    
}

const us3 = Object.create(User)
console.log(us3.email);
