//singleton
//make the singleton object shown below
// Object.create;


//object literals
//object literals shown below

const mySym = Symbol("Key1");

const jsUser = {
    name: "rajan",
    "full Name": "rajan rajput",
    [mySym]: "rajan.rana6@gmail.com",
    age: 27,
    location: "hoshiarpur:",
    email: "rajan.rana6@gmail.com",
    isLoggedIn: false,
    lastLoggedinDays: ["monday", 'saturday']
}

// console.log(jsUser.email);// one type of access the object old way.
// console.log(jsUser["email"]);//new way to access the object
// console.log(jsUser["full Name"]); // way to string key to access the object
// console.log(jsUser[mySym]); // if the key define without squre breacket the data type of symbol is string. 

// using sequre bracket to access the string key define in the object 

//wrong way to access the object
//console.log(jsUser.[email])
//console.log(jsUser[email])


//overright the  object value
jsUser[mySym] = "i am india best web developer i create unique and attractive website"

// console.log(jsUser[mySym]);
// Object.freeze(jsUser)
jsUser.location = "nodia"
// console.log(jsUser);

jsUser.greeting = function name() {
    console.log('Hello JS User');
}
jsUser.greetingtwo = function name() {
    console.log(`Hello JS User,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
