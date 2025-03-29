// "npm run scrpitName"

// script and dependencies section are important in package.json
const path = require("path")

console.log(__dirname); //__dirname give the current directory
console.log(path.join(__dirname,"index.js"));

// never push node modules to git repo