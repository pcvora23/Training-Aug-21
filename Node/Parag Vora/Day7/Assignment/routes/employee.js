const express = require('express');
const router = express.Router();
const fs = require('fs');
const emparr = require('../employees.json');
router.use(function (req, res, next) {
    console.log(req.url, "@time", Date(), req.method);
    next();
})

// Get whole data of employee
router.get('/', (req, res) => {
    // res.send(emparr[0].assignments[0].AssignmentProjectedEndDate);
    res.send(emparr);
    res.end();
})

// Get employee data using ID
router.get('/:empid', (req, res) => {
    var empid = req.params.empid;
    // console.log(empid);
    var got = false;
    emparr.forEach(emp => {
        if (emp.id == empid) {
            got = true;
            res.send(emp);
        }
    });
    if (got == false) {
        res.send("Employee is not found")
    }
    res.end();
})

// Add data of employee
router.post('/', (req, res) => {
    const employee = req.body;
    // res.send(employee.assignments[0].ActionCode);
    let newdata =
    {
        "FirstName": employee.FirstName,
        "LastName": employee.LastName,
        "id": emparr.length + 1,
        "assignments": [
            {
                "ActionCode": employee.assignments[0].ActionCode,
                "ActionReasonCode": employee.assignments[0].ActionReasonCode,
                "ActualTerminationDate": employee.assignments[0].ActualTerminationDate,
                "AssignmentCategory": employee.assignments[0].AssignmentCategory,
                "AssignmentId": employee.assignments[0].AssignmentId
            }
        ]
    }
    emparr.push(newdata);
    fs.writeFile('./employees.json', JSON.stringify(emparr), (err) => {
        if (err) {
            res.send(err);
            return;
        }
        else {
            res.send("new data is inserted succesfully!!!");
        }
    })
})

// Update Employee data
router.put('/:id', (req, res) => {
    // console.log(req.params.id);
    const updatemp = req.body;
    const empid = req.params.id;
    var got = false;
    emparr.forEach(emp => {
        if (emp.id == empid) {
            got = true;
            emp.FirstName = updatemp.FirstName;
            emp.LastName = updatemp.LastName;
            // res.send(emp.assignments[0].AssignmentCategory);
            emp.assignments[0].ActionCode = updatemp.assignments[0].ActionCode;
            emp.assignments[0].AssignmentCategory = updatemp.assignments[0].AssignmentCategory;
            emp.assignments[0].ActualTerminationDate = updatemp.assignments[0].ActualTerminationDate;
            emp.assignments[0].AssignmentCategory = updatemp.assignments[0].AssignmentCategory;
            emp.assignments[0].AssignmentId = updatemp.assignments[0].AssignmentId;
        }
    })
    if (got == false) {
        res.send("Employee not found");
        return;
    }
    else {
        fs.writeFile('./employees.json', JSON.stringify(emparr), (err) => {
            if (err) {
                res.send(err);
                return;
            }
            else {
                res.send("Data Updated Succesfully!!");
            }
        });
    }
    // res.end(); //if i put this here then it show error of "Can't set headers after they are sent to the client"; beacuse we are setting the header after our body is sended to client.
})

// Delete Data of employee
router.delete('/:empid',(req,res)=>
{
    const empid = req.params.empid;
    if(empid > emparr.length || empid < 1)
    {
        console.log(emparr.length);
        res.send('employee not found!!');
    }
    else
    {
        console.log(emparr.splice(empid-1,1));
        fs.writeFile('./employees.json',JSON.stringify(emparr),(err)=>
        {
            if(err)
            {
                res.send(err);
                return;
            }
            else
            {
                res.send('employee deleted succesfully!');
            }
        })
    }
})
module.exports = router; 