const express = require("express")

function sumTillN(n){
    let sum = 0
    for(let i=1; i<=n; i++){
        sum+=i
    }
    return sum;
}

// creating a clinic
const app = express()

app.get("/", function(req, res){
                // request, response
    const n = req.query.n
    const ans = sumTillN(n)
    res.send(ans)
})

// doctor taking a specific room
app.listen(3000)