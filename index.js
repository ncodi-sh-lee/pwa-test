const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.get('/', function(req, res) { 
    res.send('index.html'); 
});

app.listen(PORT);
