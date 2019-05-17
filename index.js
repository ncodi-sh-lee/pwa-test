const express = require("express");
const app = express();
const PORT = process.env.PORT;
const path = require("path");

app.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname+'/index.html')); 
});

app.listen(PORT);
