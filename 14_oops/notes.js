console.log('java script and classes');

//do java script have classes
//yes javascript does have classes.this feature was introduce with the ECMA script 2015 specification (often referred to as ES6).However,it's important to note that JavaScript is primarily a prototype-based language,and its classes are primarily syntactic suger over existing prototype-based inheritance mechanisms.in other words it provide a more familiar syntax for developer coming from class-based languages such as java or C++, but under the hood it work somewhat differently
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Buddy");
dog.speak();

//second example
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const john = new Person("John");
john.sayHello(); // Hello, my name is John

//in example 'person' is a class that has a constructor and a method named 'sayHello'. The 'constructor' method is a special method for creating and initializing an object created with a class .it will run when we  instantiate new object using the 'new' keyword.

//#oops
//Object-Oriented Programming
//object -collection of proper properties and methods eg: properties means variable method means function

//why need oops
//object literal

//components

// --constructor function




//--prototypes


//--classes



//--instances(new,this)