// date

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreateDate = new Date(2023, 0, 23); // month is start from zero into java script
// let myCreateDate = new Date(2023, 0, 23, 5, 3); //date with time
// let myCreateDate = new Date("2023-01-14"); // use string month is start from 1.
// let myCreateDate = new Date("01-14-2023");
// console.log(myCreateDate);
// console.log(myCreateDate.toDateString());


// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

let data = newDate.toLocaleString('default', {
    weekday: "long",
})


console.log(data);


