// const my_hero = ['hunman', "shri krishan", 'ram', 'karan'];
// const villan = ['ravan', 'kumbkaran', 'kans'];

// // my_hero.push(villan);
// // console.log(my_hero);
// // console.log(my_hero[4][1]);

// // const all_hero=my_hero.concat(villan);
// // console.log(all_hero);

// const all_new_heros = [...my_hero, ...villan];
// console.log(all_new_heros);


// const anotherArray = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5]]];
// const real_another_Array = anotherArray.flat(Infinity)
// console.log(real_another_Array);



// // console.log(Array.from({name:"rajan"}));

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1,score2,score3));

// arrayMethods.js

// 1. push
const fruits1 = ['apple', 'banana'];
fruits1.push('mango');
console.log('push:', fruits1);

// 2. pop
const fruits2 = ['apple', 'banana'];
fruits2.pop();
console.log('pop:', fruits2);

// 3. shift
const fruits3 = ['apple', 'banana'];
fruits3.shift();
console.log('shift:', fruits3);

// 4. unshift
const fruits4 = ['banana'];
fruits4.unshift('apple');
console.log('unshift:', fruits4);

// 5. map
const nums1 = [1, 2, 3];
const doubled = nums1.map(n => n * 2);
console.log('map:', doubled);

// 6. filter
const nums2 = [1, 2, 3, 4];
const even = nums2.filter(n => n % 2 === 0);
console.log('filter:', even);

// 7. find
const nums3 = [5, 8, 12];
const found = nums3.find(n => n > 10);
console.log('find:', found);

// 8. includes
const fruits5 = ['apple', 'banana'];
console.log('includes:', fruits5.includes('banana'));

// 9. reduce
const nums4 = [1, 2, 3, 4];
const sum = nums4.reduce((acc, curr) => acc + curr, 0);
console.log('reduce:', sum);

// 10. forEach
const fruits6 = ['apple', 'banana'];
console.log('forEach:');
fruits6.forEach(fruit => console.log(fruit));

// 11. sort
const nums5 = [3, 1, 4, 2];
nums5.sort((a, b) => a - b);
console.log('sort:', nums5);

// 12. concat
const a = [1, 2];
const b = [3, 4];
const result = a.concat(b);
console.log('concat:', result);

// 13. slice
const nums6 = [1, 2, 3, 4];
const part = nums6.slice(1, 3);
console.log('slice:', part);

// 14. splice
const nums7 = [1, 2, 3, 4];
nums7.splice(1, 2);
console.log('splice:', nums7);

// 15. join
const words = ['hello', 'world'];
console.log('join:', words.join(' '));







