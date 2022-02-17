var express = require("express");
const ProductDomain = require("../Domain/product.domain");
var router = express.Router();
const verifyAdmin = require("../Authentication/adminverifytoken");
const verifyLogIn = require("../Authentication/verify");

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

  // product filter
  static async getProductFilter(req,res)
  {
    const p = new ProductDomain();
    p.getProductFilter(req,res);
  }

  // product detail from _id
  static async getDetailFrom_id(req,res)
  {
    const p = new ProductDomain();
    p.getDetailFrom_id(req,res);
  }

  // last Id
  static async getLastInsertedId(req,res)
  {
    const p = new ProductDomain();
    p.getLastInsertedId(req,res);
  }
}

//To get all products
router.get("/", ProductController.get);

//To get an single product by id
router.get("/:prodId", ProductController.getProduct);

//To get a last inserted id
router.get("/filter/lastid", ProductController.getLastInsertedId);

// product filter
router.get('/filter/search',ProductController.getProductFilter);

router.get('/detail/:prod_id',ProductController.getDetailFrom_id)

router.use(verifyLogIn);
router.use(verifyAdmin);
//To delete an product
router.delete("/:prodId", ProductController.deleteProduct);
//To Create New product
router.post("/", ProductController.insertProduct);
//To Update Data Of An product
router.put("/", ProductController.updateProduct);

module.exports = router;
