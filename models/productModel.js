import mongoose,{Schema} from "mongoose";


var productSchema = new mongoose.Schema({

    name : {
        type : String,
        required: true,
        trim: true 
    },
    description:{
        type:String,
        required: true,      
    },
    price:{
        type:Number,
        required:true,
        default : 0
    },
    category:{
        type: String,
        required : true,
        default : "Trống"
    },
    brand:{
        type: String,
        required : true,
        default : "Trống"
    },
    quantity:{
        type: Number,
        required : true,
        default : 0
    },
    image : {
        type : String,
        default : null
    },
    sold: {
        type: Number,
        default:0,
        
    },
    tags:{
        type: String,
        default: null,
    }},{
        timestamps : true
    }
);


export const Product = mongoose.model('product',productSchema);