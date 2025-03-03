// Promise class gives us a promise, that it will return something in future
// This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.


// let firstPromise = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) resolve(10);
//     else reject(-1);
// });

// firstPromise
//     .then((message) => {
//         console.log(`Message from resolve is : ${message}`);
//         return 20;
//     })
//     .then((message) => {
//         console.log(`Second message : ${message}`);
//         return 30;
//     })
//     .then((message) => {
//         console.log(`Third message : ${message}`);
//     })
//     .finally(() => {
//         console.log(`Mai to final hu, mai to pakka chalunga`);
//     });


// let promise1 = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 1000, "first")
// })
// let promise2 = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 2000, "second")
// })
// let promise3 = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 3000, "third")
// })

// Promise.all([promise1, promise2, promise3])
//     .then((message)=>{
//         console.log(message)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })



