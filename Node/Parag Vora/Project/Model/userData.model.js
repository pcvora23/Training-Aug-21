const {transactionSchema} = require("./transaction.model");
const {orderSchema} = require("./order.model");
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true ,
        trim: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    password: {
        type: String,
        required: true, 
        trim: true,
    },
    mobileno: {
        type: Number,
        trim: true,
    },
    balance : {type : Number , min : 0 , default : 0},
    transactions: {
        type: [transactionSchema],
    },
    orders: {
        type: [orderSchema],
    },
});

const UserModel = mongoose.model('user',userSchema);
module.exports = UserModel;





























