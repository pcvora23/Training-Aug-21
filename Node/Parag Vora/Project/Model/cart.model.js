const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        user:
        {
            type:mongoose.Schema.types.ObjectId,
            ref:"user",
            required:true
        },
        product_details:
        {
            type:String,
            ref:"Product",
            required:true
        },
        Quantity:
        {
            type:Number,
            default:1
        }
    }
)