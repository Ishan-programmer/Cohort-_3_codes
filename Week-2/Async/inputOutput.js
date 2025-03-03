const fs = require("fs")

fs.readFile("./Async/a.txt", "utf-8", function (err,data){
    console.log(data);
})

let b = fs.readFileSync("./Async/b.txt", "utf-8");
console.log(b);

setTimeout(()=>{
    console.log("10 seconds")
},10000);

// setTimeout(() => {
//     console.log("5 seconds");
// }, 5000);


//          Slides
// https://projects.100xdevs.com/tracks/async-js-1/Asynchronous-Javascript--Callbacks-and-more-1