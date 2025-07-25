const name = 'rajan';
const repo = 50;
console.log(name + repo + ' repoesity'); // modern js is don't use +

console.log(`hello my name is ${name} and my github repo count is ${repo} .`);
// string interplusion

const gameName = new String('rajan_HC')
console.log(gameName);

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toLocaleUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf("j"));


const newString = gameName.substring(0, 4) // dont allow to give negtive value and end number didnot count

console.log(newString);

const anotherString = gameName.slice(-7, 2) // allowed to give negtive value the nagtive value end of rnd the string
console.log(anotherString);

const newStringOne = "      rajan    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rajan.com/rajan%20about";

console.log(url.replace("%20", "-"));

console.log(url.includes("about"))

console.log(gameName.split('_'));










