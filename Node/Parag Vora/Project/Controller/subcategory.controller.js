var express = require("express");
const SubCategoryDomain = require("../Domain/subcategory.domain");
var router = express.Router();
const verifyAdmin = require("../Authentication/adminverifytoken");
const verifyLogIn = require("../Authentication/verify");

class SubCategoryController {
  //To get all subCategories
  static async get(req, res) {
    const p = new SubCategoryDomain();
    p.getAllSubCategory(req, res);
  }
  //to get SubCategory
  static async getSubCategory(req, res) {
    const p = new SubCategoryDomain();
    p.getSubCategory(req, res);
  }
  //To insert SubCategory
  static async insertSubCategory(req, res) {
    const p = new SubCategoryDomain();
    p.insertSubCategory(req, res);
  }
  //To update SubCategory
  static async updateSubCategory(req, res) {
    const p = new SubCategoryDomain();
    p.updateSubCategory(req, res);
  }
  //To delete SubCategory
  static async deleteSubCategory(req, res) {
    const p = new SubCategoryDomain();
    p.deleteSubCategory(req, res);
  }
  //To get new id
  static async getNewSubCategoryId(req, res) {
    const p = new SubCategoryDomain();
    p.getNewSubCategoryId(req, res);
  }
}

//To get all Categories
router.get("/", SubCategoryController.get);
//To get an single SubCategory by id
router.get("/:SubCateId", SubCategoryController.getSubCategory);
//To get new id
router.get("/getlastid/newid", SubCategoryController.getNewSubCategoryId);

router.use(verifyLogIn);
router.use(verifyAdmin);
//To delete an SubCategory
router.delete("/:SubCateId", SubCategoryController.deleteSubCategory);
//To Create New SubCategory
router.post("/", SubCategoryController.insertSubCategory);
//To Update Data Of An SubCategory
router.put("/", SubCategoryController.updateSubCategory);

module.exports = router;
