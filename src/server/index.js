var express = require('express');
var app = express();

app.use(express.static(__dirname + './../../')); //serves the index.html
console.log("starting now...")
app.listen(3000); //listens on port 3000 -> http://localhost:3000/