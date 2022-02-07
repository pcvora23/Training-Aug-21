const mongoose = require("mongoose");

const SubCategorySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  categoryBelongsTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },

});

const SubCategoryModel = mongoose.model("SubCategory", SubCategorySchema);

module.exports = SubCategoryModel;
