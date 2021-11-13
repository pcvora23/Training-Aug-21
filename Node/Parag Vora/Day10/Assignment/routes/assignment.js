const express = require('express');
const { route } = require('.');
const router = express.Router();
const app = express();
router.use(express.json());

const {empAssignments} = require('../config/connection');

// get all employees
router.get('/', (req, res) => {
    empAssignments.find({}, (err, data) => {
        res.send(data);
    })

})

// get employee by id
router.get('/:id', (req, res) => {
    empAssignments.find({ empId: req.params.id }, (err, data) => {
        res.send(data);
    })

})


// update data of employee by id
router.post('/:id', (req, res) => {
    empAssignments.updateOne
        (
            { empId: req.params.id },
            {
                $set:
                {
                    addressline1: req.body.addressline1,
                    addressline2: req.body.addressline2
                }
            }
        )
})

// update specific assignment
router.put('/:empid/child/assignments/:assignId', (req, res) => {
    empAssignments.findOne({ empId: req.params.empid }, { assignmentId: req.params.assignId }, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.send(data);
        console.log(data);
    })
})

// Add an assignment to specific employee's assignments
router.post('/:empid/child/assignments', (req, res) => {
    empAssignments.updateOne({ empId: req.params.empid }, {
        $push: { assignments: req.body }
    }, (err, doc) => {
        console.log(doc);
        res.send('pushed successfully')
    })
})

module.exports = router;