const express = require ('express');
const app = express();
const jwt = require('jsonwebtoken');
global.config = require('./Config/config');
var verifyToken = require('./Authentication/verify');
const mongoose = require('mongoose');
app.use(express.json());

const products = require('./Controller/product.controller');
const category = require('./Controller/category.controller');
const user = require('./Controller/user.controller');
const order = require('./Controller/transaction/order');
const transaction = require('./Controller/transaction/transaction');

app.get('/',(req,res)=>
{
    res.send('hello world');
})

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

var mongoDB = "mongodb://localhost/RealmeDb";
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected To MongoDB"));

app.use('/products',products);
app.use('/category',category);
app.use('/user',user);
app.use('/order',order);
app.use('/transaction',transaction);
app.listen(3000,()=>
{
    console.log(`application started..`);
})