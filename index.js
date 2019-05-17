const express = require("express");
const app = express();
const PORT = process.env.PORT;
const path = require("path");

app.get('/', function(req, res) { 
    res.sendFile(path.join('./index.html')); 
});

app.listen(PORT);
