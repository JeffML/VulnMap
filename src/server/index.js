var express = require('express');
var app = express();

app.use(express.static(__dirname + './../../')); //serves the index.html
console.log("starting now...")

app.disable('etag')
app.use(function(req, res, next) {
    req.headers['if-none-match'] = 'no-match-for-this';
    next();
});

app.use('/service', require('./routes.js'))
app.listen(3000); //http://localhost:3000/