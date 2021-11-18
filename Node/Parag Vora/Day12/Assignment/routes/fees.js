const express = require('express');
const router = express.Router();
const { fees } = require('../config/connection');

router.get('/', (req, res) => {
    fees.find({}, (err, data) => {
        res.send(data);

    })
})

router.get('/:id/fees',(req,res)=>
{
    fees.find({ID:req.params.id},(err,data)=>
    {
        res.send(data[0].Fees);
    })
})

router.post('/fees',(req,res)=>
{
    fees.insertMany(req.body);
    fees.find({},(err,data)=>
    {
        console.log(data);
        res.send(data);
    })

    // console.log(req.body);
})

router.put('/:id/fees',(req,res)=>
{
    fees.updateOne({ID:req.params.id},req.body,(err,doc)=>
    {
        console.log('updated');
    })
    fees.find({},(err,data)=>
    {
        res.send(data);
    })
})

router.delete('/:id/fees',(req,res)=>
{
    fees.deleteOne({ID: req.params.id}).then(()=>
    {
        console.log('deleted');
    })
    .catch((err)=>
    {
        console.log(err);
    })
    fees.find({},(err,data)=>
    {
        res.send(data);
    })
})


module.exports = router;