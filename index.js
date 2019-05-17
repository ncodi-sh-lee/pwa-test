const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.get('/', function(req, res) { 
    res.send('root page'); 
});

app.listen(PORT);
