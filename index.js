/*
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));
*/
const express = require("express");
const app = express();
const importData = require("./data.json");
const port = '8080';

/*
let port = 8080;

let port = process.env.port ;
*/
app.set('port',process.env.PORT || 3000);

app.get("/", (req,res) => {

    res.send("Hello World")
})

app.get("/services", (req,res) => {
    res.send(importData)
})

app.listen(port, () => {
    console.log('Example app is listening ');

})

