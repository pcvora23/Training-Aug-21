var express = require("express");
const ProductDomain = require("../Domain/product.domain");
var router = express.Router();

class ProductController {
  //To get all Products
  static async get(req, res) {
    const p = new ProductDomain();
    p.getAllProduct(req, res);
  }
  //to get Product
  static async getProduct(req, res) {
    const p = new ProductDomain();
    p.getProduct(req, res);
  }
  //To insert Product
  static async insertProduct(req, res) {
    const p = new ProductDomain();
    p.insertProduct(req, res);
  }
  //To update Product
  static async updateProduct(req, res) {
    const p = new ProductDomain();
    p.updateProduct(req, res);
  }
  //To delete Product
  static async deleteProduct(req, res) {
    const p = new ProductDomain();
    p.deleteProduct(req, res);
  }
  
  //To get Category
  static async getCategory(req, res) {
    const p = new ProductDomain();
    p.getCategory(req, res);
  }
}

//To get all products
router.get("/", ProductController.get);
//To get an single product by id
router.get("/:prodId", ProductController.getProduct);
//To delete an product
router.delete("/:prodId", ProductController.deleteProduct);
//To Create New product
router.post("/", ProductController.insertProduct);
//To Update Data Of An product
router.put("/", ProductController.updateProduct);

module.exports = router;
