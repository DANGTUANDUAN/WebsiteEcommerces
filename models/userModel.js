import mongoose,{Schema} from "mongoose";

var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role: {
        type : String,
        default : "user"
    },
    isBlocked:{
        type: Boolean,
        default: false
    },
    cart :{
        type : Array,
        default: [],
    },
    address:{
        type: String,
    },
    wishList:[{type: mongoose.Schema.Types.ObjectId,ref:"Product"}],
    refreshToken:{
        type : String,
    }
},{
    timestamps: true
});

export const User = mongoose.model('user',userSchema);