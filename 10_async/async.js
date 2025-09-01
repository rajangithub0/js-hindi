// interview async
console.log('Async/Await Interview Questions');

// 1. What is async/await in JavaScript?
// Answer: Async/await is a syntactic sugar built on top of Promises that allows you to write asynchronous code in a more synchronous and readable manner. The 'async' keyword is used to declare a function as asynchronous, and the 'await' keyword is used to pause the execution of the function until a Promise is resolved.

//javaScript is a single-threaded language, which means it can only execute one task at a time. However, it can handle asynchronous operations using callbacks, promises, and async/await. Asynchronous operations allow JavaScript to perform tasks like fetching data from an API or reading files without blocking the main thread.
//javascript is a synchronous language, which means it executes code line by line. However, it can handle asynchronous operations using callbacks, promises, and async/await. Asynchronous operations allow JavaScript to perform tasks like fetching data from an API or reading files without blocking the main thread.//
// default

//execution context
//execute one by one at a time
//call stack
//web api
//callback queue
//event loop
// each operation has its own execution context
//each operation waits for the last one to complete before it can execute
//call stack  memory heap


//blocking vs non-blocking
//blocking - synchronous
//non-blocking - asynchronous
//block the flow the program-read the file synchronously
//does not block the flow of the program - fetch data from an api read file asynchronously

//2. How do you declare an async function?
// Answer: You declare an async function by using the 'async' keyword before the function definition. For example:
// async function fetchData() {
    // function body
// }


