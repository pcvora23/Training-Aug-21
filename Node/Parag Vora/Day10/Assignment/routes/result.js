const express = require('express');
const router = express.Router();
const { result } = require('../config/connection');

router.get('/', (req, res) => {
    result.find({}, (err, data) => {
        res.send(data);

    })
})

router.get('/:id/result',(req,res)=>
{
    result.find({ID:req.params.id},(err,data)=>
    {
        res.send(data[0].Result);
    })
})

router.post('/result',(req,res)=>
{
    result.insertMany(req.body);
    result.find({},(err,data)=>
    {
        console.log(data);
        res.send(data);
    })

    // console.log(req.body);
})

router.put('/:id/result',(req,res)=>
{
    result.updateOne({ID:req.params.id},req.body,(err,doc)=>
    {
        console.log('updated');
    })
    result.find({},(err,data)=>
    {
        res.send(data);
    })
})

router.delete('/:id/result',(req,res)=>
{
    result.deleteOne({ID: req.params.id}).then(()=>
    {
        console.log('deleted');
    })
    .catch((err)=>
    {
        console.log(err);
    })
    result.find({},(err,data)=>
    {
        res.send(data);
    })
})


module.exports = router;