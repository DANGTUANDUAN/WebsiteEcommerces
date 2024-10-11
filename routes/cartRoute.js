import express from "express";
import { createCart , getUserCart , removeProductCart , updateQuantityItemCart , emtyCart } from "../controller/cartController.js";
const cartRouter = express.Router();

// [POST] user/cart
cartRouter.post('/',createCart);

// [GET] user/cart
cartRouter.get('/',getUserCart);

// [PUT] user/cart/:cartItemId/:newQuantity
cartRouter.put('/:cartItemId/:newQuantity',updateQuantityItemCart);

// [DELETE] user/cart/:cartItemID
cartRouter.delete('/:cartItemID',removeProductCart);

// [DELETE] user/cart/empty
cartRouter.delete('/empty',emtyCart);

export {cartRouter};