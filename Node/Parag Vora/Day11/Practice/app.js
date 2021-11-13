const express = require('express');
const app = express();
const port = 3000;
const connect = require('./connect');
// app.use('/', connect);
const{getFees} = require('./connect');
const{fees} = require('./connect');
const{getAddress} = require('./connect');
const{getData} = require('./connect');
const{getRegex} = require('./connect');
const{getCountandSort} = require('./connect');

app.get('/', (req, res) => {
    res.send("hello.....");
})

// getFees();
// getAddress();
// getData();
// getRegex();
getCountandSort();
app.listen(port, () => {
    console.log(`application stated on  port ${port}`);
})