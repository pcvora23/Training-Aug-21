var express = require("express");
var router = express.Router();
const Razorpay = require("razorpay");
const dotenv = require("dotenv");
dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.Razorpay_Key,
  key_secret: process.env.Razorpay_Secret,
});

class PaymentController {
  //To do payment
  static async orderPayment(req, res) {
    const payment_capture = 1;
    const amount = req.body.amount;
    const currency = "INR";
    const orderId = 11;
    const options = {
      amount: amount * 100,
      currency,
      receipt: orderId,
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      console.log(response);
      res.json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  }
}

//To do Payment
router.post("/order/", PaymentController.orderPayment);

module.exports = router;

