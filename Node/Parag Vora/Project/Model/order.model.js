const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  Product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  ProductName: {
    type: String,
    required: true,
    trim: true,
  },
  size: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  Shipping_Address: {
    type: String,
    required: true,
    trim: true,
  },
  DeliveredOn: {
    type: String,
  },
  OrderDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  Quantity: {
    type: Number,
    default: 1,
    required: true,
  },
});

// const OrderModel = mongoose.model("order", orderSchema);
module.exports = orderSchema;
