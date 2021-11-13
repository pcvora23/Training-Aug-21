const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/day11db')
    .then(() => {
        console.log('connected to database');
    })
    .catch((err) => {
        console.log(err);
    })

// employee schema
const employeeSchema = mongoose.Schema({
    empId: String,
    addressline1: String,
    addressline2: String,
    assignments: [Object],
    City: String,
    Country: String,
    DOB: String,
    DLid: Number,
    directReports: [Number]
})
const empAssignments = mongoose.model('empAssignment', employeeSchema);

// fees chema
const feeSchema = mongoose.Schema(
    {
        ID: Number,
        Name: String,
        Address: String,
        Fees: Object
    }
)
const fees = mongoose.model('fee',feeSchema);

// Result schema
const resultSchema = mongoose.Schema(
    {
        ID: Number,
        Name: String,
        Address: String,
        Result: Object
    }
)
const result = mongoose.model('result',feeSchema);


module.exports = {empAssignments,fees,result};