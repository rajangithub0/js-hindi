// date

// let myDate = new Date();
// console.log(myDate); //2025-07-28T06:46:16.341Z
// console.log(myDate.toString()); //Mon Jul 28 2025 12:16:16 GMT+0530 (India Standard Time
// console.log(myDate.toDateString()); //Mon Jul 28 2025
// console.log(myDate.toLocaleString()); //28/7/2025, 12:16:16 pm
// console.log(myDate.valueOf()); //1753685176341 in miliseconds.
// console.log(myDate.toISOString()); //2025-07-28T06:46:16.341Z
// console.log(myDate.toJSON()); //2025-07-28T06:46:16.341Z
// console.log(myDate.toLocaleDateString()); //28/7/2025
// console.log(myDate.toUTCString()); //Mon, 28 Jul 2025 06:46:16 GMT
// console.log(myDate.toTimeString()); //12:18:43 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleTimeString()); //12:18:43 pm
// console.log(typeof myDate); //object

// let myCreateDate = new Date(2023, 0, 23); // month is start from zero into java script
// console.log(myCreateDate); //2023-01-22T18:30:00.000Z


// let myCreateDate = new Date(2023, 0, 23, 5, 3); //date with time
// console.log(myCreateDate);  //2023-01 - 22T23: 33:00.000Z

// let myCreateDate = new Date("2023-01-14"); // use string month is start from 1. (YYYY-MM-DD)
// console.log(myCreateDate); //2023-01-14T00:00:00.000Z

// let myCreateDate = new Date("01-14-2023"); //(MM-DD-YYYY)
// console.log(myCreateDate); //2023-01-13T18:30:00.000Z
// console.log(myCreateDate.toDateString()); //Sat Jan 14 2023


// let myTimeStamp = Date.now()
// console.log(myTimeStamp); //1753685968123
// console.log(Math.floor(Date.now() / 1000)); //1753685968

// let myCreateDate = new Date(2023, 0, 23);
// console.log(myCreateDate.getTime());


// let newDate = new Date()
// console.log(newDate); //2025-07-28T07:00:06.471Z
// console.log(newDate.getMonth() + 1); //2025-07-28T07:00:06.471Z
// console.log(newDate.getDay()); //1

let data = new Date.toLocaleString('default', {
    weekday: "long",
})


console.log(data);


