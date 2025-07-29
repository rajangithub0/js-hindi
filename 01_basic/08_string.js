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




//-----------------------String with all methods--------------------------------------

// JavaScript String Methods – Examples with Explanation

const str = "  Hello JavaScript World!  ";
console.log("Original String:", `"${str}"`);

// 1. length - Returns the length of the string
console.log("length:", str.length);

// 2. trim() - Removes whitespace from both ends
console.log("trim():", str.trim());

// 3. trimStart() - Removes whitespace from the start
console.log("trimStart():", str.trimStart());

// 4. trimEnd() - Removes whitespace from the end
console.log("trimEnd():", str.trimEnd());

// 5. toUpperCase() - Converts to uppercase
console.log("toUpperCase():", str.toUpperCase());

// 6. toLowerCase() - Converts to lowercase
console.log("toLowerCase():", str.toLowerCase());

// 7. includes() - Checks if substring exists
console.log("includes('Java'):", str.includes("Java"));

// 8. startsWith() - Checks if string starts with substring
console.log("startsWith('  Hello'):", str.startsWith("  Hello"));

// 9. endsWith() - Checks if string ends with substring
console.log("endsWith('!  '):", str.endsWith("!  "));

// 10. indexOf() - First index of substring
console.log("indexOf('Java'):", str.indexOf("Java"));

// 11. lastIndexOf() - Last index of substring
console.log("lastIndexOf('o'):", str.lastIndexOf("o"));

// 12. charAt(index) - Character at specific index
console.log("charAt(6):", str.charAt(6));

// 13. at(index) - Supports negative indexes
console.log("at(-1):", str.at(-1));

// 14. charCodeAt(index) - Unicode value of character
console.log("charCodeAt(1):", str.charCodeAt(1));

// 15. concat() - Joins two or more strings
console.log("concat():", "Hello".concat(" ", "World"));

// 16. slice(start, end) - Extracts part of a string
console.log("slice(2, 7):", str.slice(2, 7));

// 17. substring(start, end) - Similar to slice but no negative indexes
console.log("substring(2, 7):", str.substring(2, 7));

// 18. substr(start, length) - Extracts string from index with length (Deprecated)
console.log("substr(2, 5):", str.substr(2, 5));

// 19. replace(old, new) - Replace first match
console.log("replace('World', 'Universe'):", str.replace("World", "Universe"));

// 20. replaceAll(old, new) - Replace all matches
console.log("replaceAll(' ', '-'):", str.replaceAll(" ", "-"));

// 21. split(separator) - Splits string into array
console.log("split(' '):", str.trim().split(" "));

// 22. repeat(n) - Repeats the string
console.log("repeat(2):", str.trim().repeat(2));

// 23. padStart(targetLength, padStr) - Pad beginning
console.log("'5'.padStart(4, '0'):", '5'.padStart(4, '0'));

// 24. padEnd(targetLength, padStr) - Pad end
console.log("'5'.padEnd(4, '0'):", '5'.padEnd(4, '0'));

// 25. match(regex) - Match with regular expression
console.log("match(/Java/):", str.match(/Java/));

// 26. matchAll(regex) - Returns all matches with capture groups
const matches = [...str.matchAll(/o/g)];
console.log("matchAll(/o/g):", matches);

// 27. valueOf() - Returns primitive string value
const stringObj = new String("hello");
console.log("valueOf():", stringObj.valueOf());

// 28. toString() - Converts to string
console.log("toString():", stringObj.toString());

// 29. localeCompare(otherStr) - Compares strings
console.log("'a'.localeCompare('b'):", "a".localeCompare("b"));

// 30. normalize() - Unicode normalization
console.log("'mañana'.normalize():", "mañana".normalize());







