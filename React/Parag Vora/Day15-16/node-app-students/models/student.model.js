const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    // fatherName:
    // {
    //     type:String,
    //     required:true,
    //     trim:true,
    // },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    // email:{
    //     type:String,
    //     required:true,
    //     trim:true,
    // },
    // dob:{
    //     type:Date,
    //     required:true,
    //     trim:true
    // },
    // phoneNumber:
    // {
    //     type:Number,
    //     required:true,
    //     trim:true
    // },
    // country:
    // {
    //     type:String,
    //     required:true,
    //     trim:true
    // },
    // state:
    // {
    //     type:String,
    //     required:true,
    //     trim:true
    // },
    // city:
    // {
    //     type:String,
    //     required:true,
    //     trim:true
    // },
    // pincode:
    // {
    //     type:Number,
    //     required:true,
    //     trim:true,
    // },
    image:
    {
        type:String,
        required:true,
    },
    collegeName:
    {
        type:String,
        required:true,
    },
    collegeLogo:
    {
        type:String,
        required:true,
    }

})

const Student = mongoose.model('students',StudentSchema);

module.exports = Student;