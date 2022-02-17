var express = require("express");
const OrderDomain = require("../Domain/order.domain");
var router = express.Router();
const verifyAdmin = require("../Authentication/adminverifytoken");
const verifyLogIn = require("../Authentication/verify");

class OrderController {
  //To place order
  static async makeOrder(req, res) {
    const order = new OrderDomain();
    order.makeOrder(req, res);
  }
  //to update status of order
  static async updateOrderStatus(req, res) {
    const order = new OrderDomain();
    order.updateOrderStatus(req, res);
  }
}

router.use(verifyLogIn);
router.post("/makeorder", OrderController.makeOrder);
router.put("/orderstatus", OrderController.updateOrderStatus);

module.exports = router;
