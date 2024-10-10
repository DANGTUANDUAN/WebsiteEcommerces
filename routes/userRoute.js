import express from "express";
import { createUser,getAllUser,getUser,updateUser,deleteUser,blockUser,updatePassword } from "../controller/userController";

const userRouter = express.Router();

// [POST] user/
userRouter.post('/',createUser);

// [GET] user/all
userRouter.get('/all',getAllUser);

// [GET] user/:id
userRouter.get('/:id',getUser);

// [PUT] user/:id
userRouter.put('/:id',updateUser);

// [DELETE] user/:id
userRouter.delete('/:id',deleteUser);

// [PUT] user/block/:id
userRouter.put('/block/:id',blockUser);

// [PUT] user/password
userRouter.put('/password',updatePassword);

export {userRouter};