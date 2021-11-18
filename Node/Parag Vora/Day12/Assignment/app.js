const express = require('express');
const app = express();
app.use(express.json());
const home = require('./routes/index');
const assignment = require('./routes/assignment');
const students = require('./routes/fees')
const result = require('./routes/result')

app.use('/',home);
app.use('/employees',assignment);
app.use('/students',students);
app.use('/studres',result);
app.listen(3000,()=>
{
    console.log('listening on port 3000');
})


