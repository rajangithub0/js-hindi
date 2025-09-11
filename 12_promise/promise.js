// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(),catch()

//promise 1 creation
const promiseOne = new Promise(function (resolve, reject) {
    //do an async call
    //db calls, cryptography, network calls
    setTimeout(function () {
        console.log('Async task is completed');
        resolve(); //pending -> resolved
    }, 1000)
})

promiseOne.then(function () { // .then connect with resolve driectly
    console.log('Promise is consumed');

})

//promise 2 creation
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2 is completed');
        resolve(); //pending -> resolved
    }, 1000)
}).then(function () {
    console.log('Promise 2 is resolved');

})

//promise 3 creation

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: 'admin', email: 'admin@admin.com' })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);

})

//promise 4 creation

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: 'admin', email: 'admin@gmail.com', password: '12345' })
        } else {
            reject('Error: Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    }).then((username) => {
        console.log(username);
    }).catch(function (err) {
        console.log(err);
    }).finally(() => {
        console.log('promise is either resolved and rejected');

    })


//promise Five

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: 12345 })
        } else {
            reject(`error:js went wrong`) //reject means
        }
    }, 1000)
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);

    }

}

consumePromiseFive()

// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E", error);
//     }
// }
// getAllUser()


//promise six

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json()
    } )
    .then((data) => console.log(data))
    .catch((err) => console.log(err))




    