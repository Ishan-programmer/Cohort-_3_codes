const fs = require("fs");

// fs.readFile("a.txt", 'utf-8', function(err,data){
//     data = data.trim()
//     fs.writeFile("a.txt", data, function(){

//     })
// })

function cleanFile(filepath) {
    return new Promise((resolve) => {
        fs.readFile(filepath, "utf-8", function (err, data) {
            data = data.trim();
            fs.writeFile(filepath, data, function () {
                console.log(data)
                // resolve();
            });
        });
    });
}
cleanFile("a.txt")