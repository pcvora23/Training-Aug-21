const CartModel = require("../Model/cart.model");

class CartDomain {
  async addItemToCart(req, res) {
    CartModel.findOne({ user: req.decoded._id }).exec((error, cart) => {
      if (error) return res.status(400).json({ error });
      if (cart) {
        // if cart already exists then update cart by quantity
        const product = req.body.cartItems.product;
        const item = cart.cartItems.find((c) => c.product == product);
        let condition, update;
        if (item) {
          condition = { user: req.decoded._id, "cartItems.product": product };
          update = {
            $set: {
              "cartItems.$": {
                ...req.body.cartItems,
                quantity: item.quantity + req.body.cartItems.quantity,
              },
            },
          };
        } else {
          condition = { user: req.decoded._id };
          update = {
            $push: {
              cartItems: req.body.cartItems,
            },
          };
        }
        CartModel.findOneAndUpdate(condition, update).exec((error, _cart) => {
          if (error) return res.status(400).json({ error });
          if (_cart) {
            return res.status(201).json({ cart: _cart });
          }
        });
      } else {
        // if cart not exist then create a new cart
        const cart = new CartModel({
          user: req.decoded._id,
          cartItems: [req.body.cartItems],
        });
        cart.save((error, cart) => {
          if (error) return res.status(400).json({ error });
          if (cart) {
            return res.status(201).json({ cart });
          }
        });
      }
    });
  }

  async getItems(req,res)
  {
    const itemData = await CartModel.findOne({user:req.decoded._id});
    // console.log(itemData);
    res.send(itemData)
  }
  async deleteCart(req,res)
  {
    const status = await CartModel.deleteOne({user:req.decoded._id});
    if (status) {
      res.send("Cart Deleted Successfully");
    } else {
      res.status(404).send("Data Not Found");
    }
  }
}

module.exports = CartDomain;
