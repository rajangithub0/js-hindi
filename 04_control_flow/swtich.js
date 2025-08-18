// // swtich statement example
// check the value of a variable and execute different code blocks based on its value// if  you miss the break statement after matching case, it will continue to execute the next cases until it hits a break or the end of the switch block.//expect default case to be executed if no case matches the value of the variable.

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 5; // Example month number (1-12)
// Using switch statement to determine the month name based on the month number
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number");
}

// const day = 'wednesday'; // Example day of the week
// Using switch statement to determine the type of day based on the day of the week
let day = "wednesday"; // You can change this string

switch (day.toLowerCase()) {
    case "sunday":
        console.log("Today is Sunday");
        break;
    case "monday":
        console.log("Today is Monday");
        break;
    case "tuesday":
        console.log("Today is Tuesday");
        break;
    case "wednesday":
        console.log("Today is Wednesday");
        break;
    case "thursday":
        console.log("Today is Thursday");
        break;
    case "friday":
        console.log("Today is Friday");
        break;
    case "saturday":
        console.log("Today is Saturday");
        break;
    default:
        console.log("Invalid day entered");
}
