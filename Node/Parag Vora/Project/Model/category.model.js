const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim:true
  },
  OfferPercentage: 
  {
      type:Number,
      default:10
  },
  
});

const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = CategoryModel;
