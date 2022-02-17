var express = require("express");
const CategoryDomain = require("../Domain/category.domain");
var router = express.Router();
const verifyAdmin = require("../Authentication/adminverifytoken");
const verifyLogIn = require("../Authentication/verify");

class CategoryController {
    //To get all Categories
    static async get(req, res) {
      const p = new CategoryDomain();
      p.getAllCategory(req, res);
    }
    //to get Category
    static async getCategory(req, res) {
      const p = new CategoryDomain();
      p.getCategory(req, res);
    }
    //To insert Category
    static async insertCategory(req, res) {
      const p = new CategoryDomain();
      p.insertCategory(req, res);
    }
    //To update Category
    static async updateCategory(req, res) {
      const p = new CategoryDomain();
      p.updateCategory(req, res);
    }
    //To delete Category
    static async deleteCategory(req, res) {
      const p = new CategoryDomain();
      p.deleteCategory(req, res);
    }
    
    //To get Category
    static async getCategory(req, res) {
      const p = new CategoryDomain();
      p.getCategory(req, res);
    }

    // to get newId
    static async getNewCategoryId(req, res) {
      const p = new CategoryDomain();
      p.getNewCategoryId(req, res);
    }

  }
  
  //To get all Categories
  router.get("/", CategoryController.get);
  //To get an single Category by id
  router.get("/:CateId", CategoryController.getCategory);
  // to get newId
  router.get('/getlastid/newid',CategoryController.getNewCategoryId);

  router.use(verifyLogIn);
  router.use(verifyAdmin);
  //To delete an Category
  router.delete("/:CateId", CategoryController.deleteCategory);
  //To Create New Category
  router.post("/", CategoryController.insertCategory);
  //To Update Data Of An Category
  router.put("/", CategoryController.updateCategory);
  
  module.exports = router;
  