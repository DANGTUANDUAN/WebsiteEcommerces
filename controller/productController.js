import { Product } from "../models/productModel";
import expressAsyncHandler from "express-async-handler";


// 5 Function {createProduct,getAllProduct,getProduct,updateProduct,deleteProduct}


// [POST] product/
const createProduct = expressAsyncHandler( async(req,res) => {
    try{

        const newProduct = await Product.create(req.body); 
        res.json(newProduct);

    }catch(err){
        throw new Error(err);
    }
});

// [GET] product/all
const getAllProduct = expressAsyncHandler( async(req,res) => {
    try{

        const allProduct = await Product.find(); 
        res.json(allProduct);

    }catch(err){
        throw new Error(err);
    }
});

// [GET] product/:id
const getProduct = expressAsyncHandler( async(req,res) => {
    try{

        const {_id} = req.params;
        const product = await Product.find(_id); 
        res.json(product);

    }catch(err){
        throw new Error(err);
    }
});

// [PUT] product/:id
const updateProduct = expressAsyncHandler( async(req,res) => {
    try {

        const {_id} = req.params;
        const updateProductID = await Product.findByIdAndUpdate(_id,req.body,{new:true});
        res.json(updateProductID);
        
    } catch (err) {
        throw new Error(err);
    }
});

// [DELETE] product/:id
const deleteProduct = expressAsyncHandler( async(req,res) => {
    try {

        const {_id} = req.params;
        const removeProduct = await Product.findByIdAndDelete(_id);
        res.json(removeProduct);
        
    } catch (err) {
        throw new Error(err);
    }
});

export {createProduct,getAllProduct,getProduct,updateProduct,deleteProduct};