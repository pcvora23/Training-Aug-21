const express = require('express');
const router = express.Router();
const fs = require('fs');
const emparr = require('../employees.json');

router.use(function(req,res,next)
{
    console.log(req.url, "@time", Date(), req.method);
    next();
})

// Get Assignment
router.get('/:empid',(req,res)=>
{
    const empid = req.params.empid;
    let got = false;
    var employee ;
    emparr.forEach((emp)=>
    {
        if(emp.id == empid)
        {
            got = true;
            employee = emp;
        }
    })
    if( got == false)
    {
        res.send("Employee not found!!!");
    }
    else
    {
        res.send(employee.assignments);
    }
})


// Add Assignment
router.post('/:empid',(req,res)=>
{
    const empid = req.params.empid;
    let got = false;
    let data = req.body;
    var employee = emparr.find((emp)=> emp.id == empid);
    // console.log(employee);
    emparr.forEach((emp)=>
    {
        if(emp.id == empid)
        {
            got = true;
            let assignments = employee.assignments || [];
            let newassigments = 
            {
                "ActionCode" : data.ActionCode,
                "ActionReasonCode": data.ActionReasonCode,
                "ActualTerminationDate": data.ActualTerminationDate,
                "AssignmentCategory": data.AssignmentCategory,
                "AssignmentId": data.AssignmentId
            }
            assignments.push(newassigments);
            employee.assignments = assignments;
        }
    })
    if( got == false)
    {
        res.status(200).send("employee not found");
    }
    else
    {
        fs.writeFile('./employees.json',JSON.stringify(emparr),(err)=>
        {
            if(err)
            {
                res.status(400).send(arr);
                return;
            }
            res.send('assignment added succesfully');
        })
    }
})

module.exports = router;