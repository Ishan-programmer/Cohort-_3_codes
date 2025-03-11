// In callback we are passing the function to another function, we are giving control to another function
// IN promise we are attaching the function to another function, we have the control of callback function

// let promise = new Promise((resolve, reject)=>{
//     let success = true
//     if(success)
//         resolve("Resolved successfully")
//     else
//         reject("Rejected")
// })
// console.log(promise);

// promise.then((message)=>{
//     console.log(message)
// })

function setTimeoutPromisified(duration) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}
setTimeoutPromisified(1000)
    .then(() => {
        console.log("hi");
        return setTimeoutPromisified(3000);
    })
    .then(() => {
        console.log("hello");
        return setTimeoutPromisified(5000);
    })
    .then(() => {
        console.log("hi there");
    });
