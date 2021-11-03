const express = require('express');
const app = express();
app.use(express.json());
global.config =require('./config');
const jwt = require('jsonwebtoken');
const port=3000;
const customer = require('./customer');
app.use('/customers',customer);
app.get('/',(req,res)=>
{
    res.send("home page");
    res.end();
})

app.post('/login',(req,res)=>
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

app.listen(port,(req,res)=>
{
    console.log(`app started on port ${port}`);
})