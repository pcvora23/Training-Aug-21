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
    Category:
    {
        type: Number,
        ref: "Category",
    },
    OfferPercentage: {
        type: Number,
        default: 0
    },
    brand:
    {
        type: String,
        required: true
    },
    manufacturedDate: {
        type: String,
        required: true
    },
    price:
    {
        type: Number,
        required: true
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
