const SubCategoryModel = require("../Model/subcategory.model");

class SubCategoryDomain {
  //To get all subCategory
  async getAllSubCategory(req, res) {
    const SubCategory = await SubCategoryModel.find().populate(
      "categoryBelongsTo",
      "name"
    );
    res.send(SubCategory);
  }
  //To get SubCategory
  async getSubCategory(req, res) {
    let ID = req.params.SubCateId;
    const SubCategory = await SubCategoryModel.find({ id: ID }); //.populate("Products");
    if (SubCategory) {
      res.send(SubCategory);
    } else {
      res.status(404).send("Product Not Found");
    }
  }

  //To Insert subcategory
  async insertSubCategory(req, res) {
    //getting user input
    let data = req.body;
    // console.log(data);
    const SubCategory = new SubCategoryModel(data);
    try {
      const result = await SubCategory.save();
      res.send('Sub Category Added Successfully');
    } catch (e) {
      res.send(e.message);
    }
  }
  //To delete a subcategory
  async deleteSubCategory(req, res) {
    let ID = req.params.SubCateId;
    const SubCategory = await SubCategoryModel.deleteOne({ id: ID });
    if (SubCategory) {
      res.send("SubCategory Record Deleted Successfully");
    } else {
      res.status(404).send("Data Not Found");
    }
  }
  //To update an subcategory
  async updateSubCategory(req, res) {
    //getting user input
    let data = req.body;
    let ID = req.body.id;
    const SubCategory = await SubCategoryModel.find({ id: ID });
    console.log(SubCategory);
    let isAvail = SubCategory.find((e) => e.id == ID);
    // console.log(isAvail);
    if (isAvail) {
      try {
        const result = await SubCategoryModel.updateOne(
          { id: ID },
          {
            $set: data,
          },
          { new: true }
        );
        res.send("subcategory updated successfuly");
      } catch (e) {
        res.send(e.message);
      }
    } else {
      res.status(404).send("SubCategory Not Found");
    }
  }

  // to get last inserted id
  async getNewSubCategoryId(req, res) {
    const newId = await SubCategoryModel.find({}).sort({ id: -1 }).limit(1);
    res.send(newId);
  }
}
module.exports = SubCategoryDomain;
