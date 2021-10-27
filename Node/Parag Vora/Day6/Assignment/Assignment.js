const { Console } = require('console');
const express = require('express');
const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());
Students = [
    {
        "ID": 1,
        "Name": "Reena",
        "Address": "Ahmedabad",
        "Fees": {
            "Amount": 10000,
            "PaymentDate": "12/12/2020",
            "Status": "true"
        },
        "Result": {
            "Hindi": 80,
            "Eng": 70,
            "Math": 60,
            "Total": 210,
            "Grade": "A"
        }
    },
    {
        "ID": 2,
        "Name": "Rita",
        "Address": "Surat",
        "Fees": {
            "Amount": 12000,
            "PaymentDate": "12/12/2020",
            "Status": "false"
        },
        "Result": {
            "Hindi": 80,
            "Eng": 70,
            "Math": 60,
            "Total": 210,
            "Grade": "A"
        }
    }
]

app.get('/', (req, res) => {
    res.send('Welcome...');
});

// Create a RESTFUL API which will return a Studentlist.(http://localhost:3000/students)
app.get('/students',(req,res)=>
{
    res.send(Students);
})

// Create RESTFUL API which will return a Particular Student Record(http://localhost:3000/students/1)
app.get('/students/:id',(req,res)=>
{
    var record = Students.find(c=>c.ID === parseInt(req.params.id));
    res.send(record);
    res.end();
})

// Create a RESTFUL API which return a particular student FEES Record. Fees field are (http://localhost:3000/students/1/fees)
/*app.get('/students/:id/fees',(req,res)=>
{
    var record = Students.find(c=>c.ID === parseInt(req.params.id));
    res.send(record.Fees);
    res.end();
})*/

// Create a RESTFUL API which will return a particular student Exam Result. Result Fields are (http://localhost:/3000/students/1/result)
/*app.get('/students/:id/result',(req,res)=>
{
    var record = Students.find(c=>c.ID === parseInt(req.params.id));
    res.send(record.Result);
    res.end();
})*/

app.get('/students/:id/:val',(req,res)=>
{
    var record = Students.find(c=>c.ID === parseInt(req.params.id));
    var key = req.params.val;
    if(key == 'fees')
    {
        res.send(record.Fees);
    }
    if(key == 'result')
    {
        res.send(record.Result);
    }
    res.end();
})


// Create a RESTFUL API which will update a result of student id 1. Update the marks for English Subject.
app.put('/students/:id/update',(req,res)=>
{
    var record = Students.find(c=>c.ID === parseInt(req.params.id));
    record.Result.Eng = req.body.Eng;
    res.send(Students);
    res.end();
})

// Port Listner
app.listen(3000, function () {
    console.log("application started");
})
