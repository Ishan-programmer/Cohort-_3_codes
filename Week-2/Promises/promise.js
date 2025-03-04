// Promise class gives us a promise, that it will return something in future
// This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// the parameter passed in .then function is passed to resolve and .catch will be passed to reject
// .then ke under jo function jaata hai wahi resolve me jayega

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

// function setTimeoutPromisified(ms) {
//     let p = new Promise ((resolve, reject)=>{
//         setTimeout(resolve,ms)
//     })
//     return p;
// }

// function callback() {
//     console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);
// callback is passed after resolve and reject

// Callback hell
// setTimeout(()=>{
//     console.log("Hi")
//     setTimeout(()=>{
//         console.log("hello")
//         setTimeout(()=>{
//             console.log("hello there")
//         },5000)
//     },3000)
// },1000)

// const promiseOne = new Promise(function(resolve, reject){
//     // async tasks
//     setTimeout(function(){
//         console.log("setTimeout Executed after 1 sec")
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise called")
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("setTimeout is executed");
//         resolve({username:"Ishan", email:"ishan@gmail.com"})
//     },1000)
// })

// promiseThree.then(function (user) {
//     console.log(user);
// });

// the return in .then will be passed to to futher .then as an arguement
// .finally will be executed always no matter whether the promise is fullfiled or not

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("setTimeout is executed");
        resolve({ username: "Ishan", email: "ishan@gmail.com" });
    }, 1000);
});

async function promiseFourFunc() {
    try {
        const response = await promiseFour;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
// async await doesn't handle errors directly. to avoid it we use try catch method
