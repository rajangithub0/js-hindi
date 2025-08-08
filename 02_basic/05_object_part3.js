//destructuring

const course={

    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Ekaansh"
}

// destructuring
const {courseInstructor: instructor}= course;
console.log(instructor); // Ekaansh

// destructuring with default value
const { courseName, coursePrice = "1000" } = course;  
console.log(courseName); // JavaScript
console.log(coursePrice); // 1000



//react component destructuring
const navBar=({company})=>{


}


navBar({company: "Ekaansh Technologies"});


//api
// {
//     ""name": "Ekaansh",
//         "couseName": "javaScript",
//         "price":"free",
//         "instructor:: "Ekaansh",
// }
// [
//     {},
//     {},
//     {}
// ]

