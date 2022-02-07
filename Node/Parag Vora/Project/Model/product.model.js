const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img:{
        type:String
    },
    category:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    subcategory:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
    },
    brand:
    {
        type: String,
        required: true
    },
    manufacturedDate: {
        type: Date,
        required: true
    },
    price:
    {
        type: Number,
        required: true,
        min:0
    },
    description:
    {
        type:String,
        required:true
    },
    return_policy:
    {
        type:Boolean,
        required:true
    }

});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;


