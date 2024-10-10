import mongoose,{Schema} from "mongoose";


var cartSchema = new mongoose.Schema({
    userId:{
     type: mongoose.Schema.Types.ObjectId,
     ref:"User"
    },
    productId:{
     type: mongoose.Schema.Types.ObjectId,
     ref:"Product"
    },
    quantity:{
     type: Number,
     required : true
    },
    price:{
     type: Number,
     required: true
    }
 },{
     timestamps: true
});

export const Cart = mongoose.model('cart',cartSchema);

