const express = require('express');
const app = express();
const emprouter = require('./routes/employee');
const assignmentrouter = require('./routes/assignment');

app.use(express.json());

app.use('/emps',emprouter);
app.use('/assignments',assignmentrouter);


app.get('/',(req,res)=>
{
    res.send("hello there..");
    res.end();
})

app.listen(3000,(req,res)=>
{
    console.log("application started at port 3000");
})