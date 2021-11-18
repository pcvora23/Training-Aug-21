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
    empId: { type:Number , required:True},
    addressline1: { type:String , required:True},
    addressline2: String,
    assignments: [Object],
    City: { type:String , required:True},
    Country: { type:String , required:True},
    DOB: { type:String , required:True},
    DLid: { type:Number , required:True},
    directReports: { type:Number }
})
const empAssignments = mongoose.model('empAssignment', employeeSchema);

// fees chema
const feeSchema = mongoose.Schema(
    {
        ID: { type:Number , required:True},
        Name: { type:String , required:True},
        Address: { type:String , required:True},
        Fees: Object
    }
)
const fees = mongoose.model('fee',feeSchema);

// Result schema
const resultSchema = mongoose.Schema(
    {
        ID: { type:Number , required:True},
        Name: { type:String , required:True},
        Address: { type:String , required:True},
        Result: Object
    }
)
const result = mongoose.model('result',feeSchema);


module.exports = {empAssignments,fees,result};