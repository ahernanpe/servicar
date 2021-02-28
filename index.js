
const express = require('express');
const cors = require('cors');
const app = express();

const importData = require('./data.json');
const importData2 = require('./data2.json');
const port = 3000;

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'));


app.get("/services", (req,res) => {
    res.send(importData)
})

app.get("/service", (req,res) => {
    res.send(importData2)
})


app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));





/*
const express = require("express");
const app = express();
const importData = require("data.json");
const port = '8080';

/*
let port = 8080;

let port = process.env.port ;
*/
