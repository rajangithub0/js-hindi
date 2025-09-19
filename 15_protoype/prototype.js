let myName = 'rajan     '
let mychannal = 'rajan.rana     '
// console.log(myName.length);
// console.log(myName.turelength); //create a method


let anotherUserName = 'code sikho       '
String.prototype.tureLength = function () {
    // console.log(`${this}`);
    // console.log(`${this.name}`); //undefined
    console.log(`true length is ${this.trim().length}`);
    
    
}

"rajan".tureLength()
'coldCoffee'.tureLength()

anotherUserName.tureLength()
let myHero = ["thor", "ironman"]
let heroPower = {
    thor: "hammer",
    ironman: "elc",

    getThorPower: function () {
        console.log(`sider power is${this.thor}`);

    }

}

Object.prototype.rajan = function () {
    console.log(`rajan is present in all object`);

}

Array.prototype.heyRajan = function () {
    console.log(`hello from rajan`)
}

// heroPower.rajan() // rajan is present in all object 
// myHero.rajan() //rajan is present in all object
// myHero.heyRajan() //hello from rajan
// heroPower.heyRajan() // showing error dur to it decleare in Array

//inheritance
const user = {
    name: 'rajan',
    email: 'rajan@google.com',
    packageAnnual:"23lpa"
}

const teacher = {
    makeVideo:true
}
const techerSupport = {
    isAvailable:false
}
const TAsupport = {
    makeAssignment: 'JS Assignment',
    fullTime:true ,
    __proto__:techerSupport
}

teacher.__proto__ = user

//modren syntex

Object.setPrototypeOf(techerSupport,teacher)