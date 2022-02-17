var express = require("express");
var router = express.Router();
const CartDomain = require("../Domain/cart.domain");
const verifyAdmin = require("../Authentication/adminverifytoken");
const verifyLogIn = require("../Authentication/verify");

class CartController
{
    static async addItemToCart(req, res) {
        const cartData = new CartDomain();
        cartData.addItemToCart(req, res);
    }
    static async getItems(req, res) {
        const cartData = new CartDomain();
        cartData.getItems(req, res);
    }
    static async deleteCart(req, res) {
        const cartData = new CartDomain();
        cartData.deleteCart(req, res);
    }
}


router.use(verifyLogIn);
router.get('/getitemdata',CartController.getItems);
router.delete('/deletecart',CartController.deleteCart);
router.post('/addtocart',CartController.addItemToCart);
module.exports = router;