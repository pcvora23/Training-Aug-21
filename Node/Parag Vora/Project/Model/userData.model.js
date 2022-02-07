const { transactionSchema } = require("./transaction.model");
const { orderSchema } = require("./order.model");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  name: { type: String, trim: true, required: true },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role:
  {
      type:String,
      required:true,
      enum:['admin','user'],
      default: 'user' 
  },
  mobileno: {
    type: Number,
    trim: true,
  },
  transactions: {
    type: [transactionSchema],
  },
  orders: {
    type: [orderSchema],
  },
  isdeleted:
  {
      type:Boolean,
      default:false,
  }
});

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
