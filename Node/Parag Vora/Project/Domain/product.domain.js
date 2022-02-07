const ProductModel = require("../Model/product.model");

class ProductDomain {
  //To get all Products
  async getAllProduct(req, res) {
    const Products = await ProductModel.find()
      .populate("category")
      .populate("subcategory");
    // const Products = await ProductModel.find().populate("category",'name -_id');
    res.send(Products);
  }
  //To get Product
  async getProduct(req, res) {
    let id = req.params.prodId;
    const Product = await ProductModel.find({ id: id })
      .populate("category")
      .populate("subcategory");
    if (Product) {
      res.send(Product);
    } else {
      res.status(404).send("Product Not Found");
    }
  }
  //to get category
  async getCategory(req, res) {
    let id = req.params.ProdId;
    let cId = req.params.CateId;
    const Product = await ProductModel.findById(id)
      .populate("category", " -OfferPercentage")
      .populate("subcategory");
    if (Product) {
      const result = Product.Category.find((p) => p.id == cId);
      if (result) {
        res.send(result);
      } else {
        res.status(404).send("Category Not Found");
      }
    } else {
      res.status(404).send("Category Not Found");
    }
  }
  //To Insert Product
  async insertProduct(req, res) {
    //getting user input
    let data = req.body;
    // console.log(data);
    const Product = new ProductModel(data);
    try {
      const result = await Product.save();
      res.send(result);
    } catch (e) {
      res.send(e.message);
    }
  }
  //To delete a Product
  async deleteProduct(req, res) {
    let ID = req.params.prodId;
    const Product = await ProductModel.deleteOne({ id: ID });
    if (Product) {
      res.send("Product Record Deleted Successfully");
    } else {
      res.status(404).send("Data Not Found");
    }
  }
  //To update an Product
  async updateProduct(req, res) {
    //getting user input
    let data = req.body;
    let id = req.body.id;
    const Products = await ProductModel.find({id:id});
    // let isAvail = Products.find((e) => e.id == id);

    if (Products.length > 0) {
      try {
        const result = await ProductModel.updateOne(
          {id:id},
          {
            $set: data,
          },
          { new: true }
        );
        res.send('product upafdted successfully');
      } catch (e) {
        res.send(e.message);
      }
    } else {
      res.status(404).send("Product Not Found");
    }
  }

  // filter
  
  async getProductFilter(req, res) {
    var query = {};
    if (req.query.OfferPercentage != undefined) {
      query["OfferPercentage"] = parseInt(req.query.OfferPercentage);
    }

    if (req.query.minPrice != "null" && req.query.maxPrice) {
      query["price"] = { $gt: req.query.minPrice, $lt: req.query.maxPrice };
    }

    console.log(query);
    const Product = await ProductModel.find(query).populate("category").populate('subcategory').exec();

    if (Product) {
      res.status(200).send(Product);
    } else {
      res.status(404).send("Product Not Found");
    }
  }
}

module.exports = ProductDomain;
