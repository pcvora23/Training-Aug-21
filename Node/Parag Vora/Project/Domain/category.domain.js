const CategoryModel = require("../Model/category.model");

class CategoryDomain {
    //To get all Category
    async getAllCategory(req, res) {
        const Category = await CategoryModel.find();
        res.send(Category);
    }
    //To get Category
    async getCategory(req, res) {
        let ID = req.params.CateId;
        const Category = await CategoryModel.find({ id: ID })//.populate("Products");
        if (Category) {
            res.send(Category);
        } else {
            res.status(404).send("Product Not Found");
        }
    }
    //to get Products
  async getProducts(req, res) {
    let id = req.params.ProdId;
    let cId = req.params.CateId;
    const Product = await CategoryModel.findById(id).populate("Products");
    if (Product) {
      const result = Product.Category.find((p) => p.id == cId);
      if (result) {
        res.send(result);
      } else {
        res.status(404).send("Product Not Found");
      }
    } else {
      res.status(404).send("Product Not Found");
    }
  }
  //To Insert category
  async insertCategory(req, res) {
    //getting user input
    let data = req.body;
    // console.log(data);
    const Category = new CategoryModel(data);
    try {
      const result = await Category.save();
      res.send('Category Added Successfully');
    } catch (e) {
      res.send(e.message);
    }
  }
  //To delete a category
  async deleteCategory(req, res) {
    let ID = req.params.CateId;
    const Category = await CategoryModel.deleteOne({id:ID});
    if (Category) {
      res.send("Category Record Deleted Successfully");
    } else {
      res.status(404).send("Data Not Found");
    }
  }
  //To update an Product
  async updateCategory(req, res) {
    //getting user input
    let data = req.body;
    let ID = req.body.id;
    const Category = await CategoryModel.find({id:ID});
    console.log(Category);
    let isAvail = Category.find((e) => e.id == ID);
    // console.log(isAvail);
    if (isAvail) {
      try {
        const result = await CategoryModel.updateOne(
          {id:ID},
          {
            $set: data,
          },
          { new: true }
        );
        res.send('Category updated succesfully');
      } catch (e) {
        res.send(e.message);
      }
    } else {
      res.status(404).send("Category Not Found");
    }
  }
  // to get last inserted id
  async getNewCategoryId(req,res)
  {
    const newId = await CategoryModel.find({}).sort({id:-1}).limit(1)
    res.send(newId);
  }
}
module.exports = CategoryDomain;