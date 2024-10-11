import { User } from "../models/userModel.js";
import { Cart } from "../models/cartModel.js";
import expressAsyncHandler from "express-async-handler";

// 5 Function {createCart ,updateQuantityItemCart,getUserCart,removeProductCart,emtyCart}

// [POST] user/cart
const createCart = expressAsyncHandler(async(req,res)=>{

    const { productId,quantity,price } = req.body;
    const { _id } = req.user;

    try {

      const newCart = await new Cart({
        userId: _id,
        productId,
        price,
        quantity
      }).save()
    
      res.json(newCart);

    }catch (err) {

      throw new Error(err);

    }
});


// [GET] user/cart
const getUserCart = expressAsyncHandler(async(req,res)=>{

    const {_id} =req.user;

    try{

        const cart = await Cart.find({userId: _id}).populate("productId");
        res.json(cart);

    }catch(err){
        throw new Error(err);
    }
});


// [DELETE] user/cart/:cartItemID
const removeProductCart = expressAsyncHandler(async(req,res)=>{

    const {_id} =req.user;
    const {cartItemId}= req.params;

    try{

        const removeproduct = await Cart.deleteOne({userId:_id,productId:cartItemId});
        res.json(removeproduct);

    }catch(error){

        throw new Error(error);

    }
});


// [DELETE] user/cart/empty
const emtyCart = expressAsyncHandler(async(req,res)=>{

    const {_id}=req.user;

    try{

        const user = await User.findOne({_id});
        const cart = await Cart.findOneAndDelete({orderby: user._id});
        res.json(cart);

    }catch(error){

        throw new Error(error);

    }
});


// [PUT] user/cart/:cartItemId/:newQuantity
const updateQuantityItemCart = expressAsyncHandler(async(req,res)=>{

    const {_id} =req.user;
    const {cartItemId,newQuantity}= req.params;
   
    try{

        const cartItem = await Cart.findOne({userId:_id,productId:cartItemId});
        cartItem.quantity=newQuantity
        cartItem.save()
        res.json(cartItem);

    }catch(error){

        throw new Error(error);
    }

});

// 5 function
export {createCart,updateQuantityItemCart,
    getUserCart,removeProductCart,emtyCart};