import mongoose,{Schema} from "mongoose";


var orderSchema = new mongoose.Schema({
    products: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
          },
          count: Number,
          color: String,
        },
      ],
    paymentIntent: { type : String , default : null },
    orderStatus: {
        type: String,
        default: "Not Processed",
        enum: ["Not Processed","Cash on Delivery","Processing","Dispatched","Cancelled","Delivered"],
    },
    orderby:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
},{
    timestamps: true
});


export const Order = mongoose.model('order',orderSchema);