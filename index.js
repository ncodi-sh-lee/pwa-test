const express = require("express");
const app = express();
const PORT = process.env.PORT;
const router = require('./router/app')(app);
const path = require("path");

app.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname+'/index.html')); 
});

app.listen(PORT);
app.use(express.static('public'));