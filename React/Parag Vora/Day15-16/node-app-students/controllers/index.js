const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const StudentRouter = require('./students/students');
router.use('/',StudentRouter);

mongoose.connect('mongodb://localhost/StudentDB')
        .then(()=>
        {
            console.log(`connected to studentDb`);
        })

module.exports = router;