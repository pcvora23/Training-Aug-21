const express = require ('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
global.config = require('./Config/config');
var verifyLogIn = require('./Authentication/verify');
const mongoose = require('mongoose');
app.use(express.json());

const products = require('./Controller/product.controller');
const category = require('./Controller/category.controller');
const subcategory = require('./Controller/subcategory.controller');
const user = require('./Controller/user.controller');
const cart = require('./Controller/cart.controller');
const payment = require('./Controller/payment.controller');
const order = require('./Controller/order.controller');
app.use(cors());

app.get('/',(req,res)=>
{
    res.send('hello world');
})


var mongoDB = "mongodb://localhost/RealmeDb";
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected To MongoDB"));
  
app.use('/user',user);
app.use('/products',products);
app.use('/category',category);
app.use('/subcategory',subcategory);
app.use('/cart',cart);
app.use('/order',order);
app.use('/payment',payment);
app.use(verifyLogIn);

app.listen(8080,()=>
{
    console.log(`application started..`);
})