const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  orderedItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, default: 1 },
    },
  ],
  TotalAmount: { type: Number, required: true },
  Shipping_Address: {
    type: String,
    required: true,
    trim: true,
  },
  OrderDate: {
    type: Date,
    default: Date.now,
  },
  PaymentStatus: {
    type: String,
    enum: ["Pending", "Completed"],
    default: "Pending",
  },
});

const OrderModel = mongoose.model("order", orderSchema);
module.exports = OrderModel;
