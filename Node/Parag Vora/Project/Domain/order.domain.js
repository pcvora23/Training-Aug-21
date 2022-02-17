const OrderModel = require("../Model/order.model");
const CartModel = require("../Model/cart.model");
let cartItems = [];
let totalprice = 0;
class OrderDomain {
  async makeOrder(req, res) {
    const cartData = await CartModel.findOne({ user: req.decoded._id });
    cartData.cartItems.map((item) => {
      cartItems.push({
        product: item.product,
        quantity: item.quantity,
        price: item.price,
      });
      totalprice = totalprice + item.quantity * item.price;
    });
    const orderData = new OrderModel({
      user: req.decoded._id,
      orderedItems: cartItems,
      TotalAmount: totalprice,
      Shipping_Address: req.body.address,
      OrderDate: req.body.OrderDate,
    });
    try {
      const result = await orderData.save();
      console.log(result);
    //   res.send("order placed Successfully");
      res.send(result._id);
    } catch (e) {
      res.send(e.message);
    }
  }
  async updateOrderStatus(req, res) {
    try {
      const result = await OrderModel.updateOne(
        { _id: req.body.order_id },
        {
          $set: { PaymentStatus: 'Completed' },
        },
      );
      res.send('Payment Status Updated Succesfully');
    } catch (e) {
      res.send(e.message);
    }
  }
}

module.exports = OrderDomain;
