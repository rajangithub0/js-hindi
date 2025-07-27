const name = 'rajan';
const repo = 50;
console.log(name + repo + ' repoesity'); // modern js is don't use +

console.log(`hello my name is ${name} and my github repo count is ${repo} .`);
// string interplusion

const gameName = new String('rajan_HC')
console.log(gameName); //[String: 'rajan_HC']

console.log(gameName[0]); //r

console.log(gameName.__proto__); //{}

console.log(gameName.length); //8

console.log(gameName.toLocaleUpperCase()); //RAJAN_HC

console.log(gameName.charAt(2)); //j

console.log(gameName.indexOf("j")); //2


const newString = gameName.substring(0, 4) // dont allow to give negtive value and end number didnot count

console.log(newString);//raja

const anotherString = gameName.slice(-7, 2) // allowed to give negtive value the nagtive value end of rnd the string
console.log(anotherString); //a

const newStringOne = "      rajan    ";
console.log(newStringOne); //      rajan
console.log(newStringOne.trim()); //rajan

const url = "https://rajan.com/rajan%20about";

console.log(url.replace("%20", "-")); //https://rajan.com/rajan-about

console.log(url.includes("about")) //true

console.log(gameName.split('_')); //[ 'rajan', 'HC' ]










