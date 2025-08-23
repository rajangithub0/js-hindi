const coding = ['js', 'ruby', "java", "python", 'cpp'];

// const values=coding.forEach((item) => {
//     console.log(item);
//     return item;
// })

// // if i store a for each to store into a variable  it cannot return. undefined.
// console.log(values);


const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// map function return self 
//if open the scope ei
// const newNums = myNums.map((num) => num + 10)
// const newNums = myNums.map((num) => { return num + 10 })
// console.log(newNums);

const myNums = Nums
    .map((num) => num * 10)
    .map((num) => num + 1) 
    .filter((num)=>num>=40)
    

console.log(myNums);
