import express from "express";
import { createProduct,getAllProduct,getProduct,updateProduct,deleteProduct } from "../controller/productController.js";

const productRouter = express.Router();

// [POST] product/
productRouter.post('/',createProduct);

// [GET] product/all
productRouter.get('/all',getAllProduct);

// [GET] product/:id
productRouter.get('/:id',getProduct);

// [PUT] product/:id
productRouter.put('/:id',updateProduct);

// [DELETE] product/:id
productRouter.delete('/:id',deleteProduct);

export {productRouter};