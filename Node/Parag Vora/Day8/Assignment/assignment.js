const express = require('express');
const app = express();
const fs = require('fs');
const jwt = require('jsonwebtoken');
global.config = require('./config');

var students = require('./students.json');
var verifyToken = require('./verify');
app.use(express.json());

// Default page to show 
app.get('/',(req,res)=>
{
    res.send("hello parag..");
})

// Login
app.post('/login',function(req,res,next)
{
    let userdata =
    {
        username : req.body.username,
        password : req.body.password
    }
    // user authentication 
    if(userdata.username =="admin" && userdata.password == "admin")
    {
        let token = jwt.sign(userdata,global.config.secretKey,
            {
                algorithm: global.config.algorithm,
                expiresIn:'7d'
            })
        res.status(200).json(
            {
                message:'login successfull',
                jwttoken: token
            }
        )
    }
    else
    {
        res.status(401).json({
            message:'login failed'
        })
    }
})

// all student data
app.get('/students',verifyToken,(req,res)=>
{
    res.json(students);
})

// data of particular student using id
app.get('/students/:stid',verifyToken,(req,res)=>
{
    const stid = req.params.stid;
    var got = false;
    students.forEach((stud)=>
    {
        if(stud.ID == stid)
        {
            got= true;
            res.json(stud);
            return;
        }
    })
    if(got == false)
    {
        res.status(404).send("student not found");
    }
})

// fees record of particular studnet
app.get('/students/:stid/fees',verifyToken,(req,res)=>
{
    const stid = req.params.stid;
    var got = false;
    students.forEach((stud)=>
    {
        if(stud.ID == stid)
        {
            got= true;
            res.json(stud.Fees);
            return;
        }
    })
    if(got == false)
    {
        res.status(404).send("student not found");
    }
})

// Result recod of particular student
app.get('/students/:stid/result',verifyToken,(req,res)=>
{
    const stid = req.params.stid;
    var got = false;
    students.forEach((stud)=>
    {
        if(stud.ID == stid)
        {
            got= true;
            res.json(stud.Result);
            return;
        }
    })
    if(got == false)
    {
        res.status(404).send("student not found");
    }
})


// Listening port 3000
app.listen(3000,(req,res)=>
{
    console.log("application stated on port 3000");
})