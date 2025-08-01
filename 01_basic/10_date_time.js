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


// -----------------time with method--------------------------


// let newDate = new Date()
// console.log(newDate); //2025-07-28T07:00:06.471Z
// console.log(newDate.getMonth() + 1); //2025-07-28T07:00:06.471Z
// console.log(newDate.getDay()); //1

let data = new Date.toLocaleString('default', {
    weekday: "long",
})


console.log(data);


//-----------------------all Date and time method-------------------------

// JavaScript Date and Time Methods - All with Examples and Expected Outputs

let now = new Date();
console.log("Current Date and Time:", now);
// Output: Current Date and Time: Fri Aug 01 2025 06:45:21 GMT+0530 (India Standard Time)

// --- Get Methods ---
console.log("getFullYear():", now.getFullYear());
// Output: 2025

console.log("getMonth():", now.getMonth());
// Output: 7 (August - months are 0-indexed)

console.log("getDate():", now.getDate());
// Output: 1

console.log("getDay():", now.getDay());
// Output: 5 (Friday)

console.log("getHours():", now.getHours());
// Output: 6

console.log("getMinutes():", now.getMinutes());
// Output: 45

console.log("getSeconds():", now.getSeconds());
// Output: 21

console.log("getMilliseconds():", now.getMilliseconds());
// Output: varies (e.g. 123)

console.log("getTime():", now.getTime());
// Output: milliseconds since Jan 1, 1970

console.log("getTimezoneOffset():", now.getTimezoneOffset());
// Output: -330 (for IST)

// --- Set Methods ---
let setDate = new Date();
setDate.setFullYear(2023);
setDate.setMonth(11); // December
setDate.setDate(25);
setDate.setHours(15);
setDate.setMinutes(20);
setDate.setSeconds(10);
console.log("Set Custom Date:", setDate);
// Output: Mon Dec 25 2023 15:20:10 GMT+0530

// --- String Methods ---
console.log("toDateString():", now.toDateString());
// Output: Fri Aug 01 2025

console.log("toTimeString():", now.toTimeString());
// Output: 06:45:21 GMT+0530 (India Standard Time)

console.log("toLocaleDateString():", now.toLocaleDateString());
// Output: 01/08/2025 (based on locale)

console.log("toLocaleTimeString():", now.toLocaleTimeString());
// Output: 6:45:21 AM

console.log("toISOString():", now.toISOString());
// Output: 2025-08-01T01:15:21.000Z

console.log("toUTCString():", now.toUTCString());
// Output: Fri, 01 Aug 2025 01:15:21 GMT

// --- Date Comparison ---
let d1 = new Date("2025-01-01");
let d2 = new Date("2025-01-10");
console.log("Is d1 before d2?", d1 < d2);
// Output: true

// --- Date Math ---
let future = new Date();
future.setDate(future.getDate() + 10);
console.log("Date after 10 days:", future);
// Output: [Today's date + 10 days]

let diff = d2 - d1;
console.log("Difference in days:", diff / (1000 * 60 * 60 * 24));
// Output: 9

// --- Parsing ---
let parsedDate = Date.parse("August 1, 2025");
console.log("Parsed milliseconds:", parsedDate);
// Output: milliseconds since 1970

let parsed = new Date(parsedDate);
console.log("Parsed Date Object:", parsed);
// Output: Fri Aug 01 2025



