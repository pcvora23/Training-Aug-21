const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8080;
const controllerRouter = require('./controllers/index');
app.use(cors());
app.use(express.json());
app.listen(port,()=>
{
    console.log(`app listening on port ${port}..`)
})

app.use('/',controllerRouter);