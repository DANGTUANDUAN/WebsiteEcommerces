import { User } from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";


// 7 Function {createUser,getAllUser,getUser,updateUser,deleteUser,blockUser,updatePassword}


// [POST] user/create
const createUser = expressAsyncHandler(async(req,res) => {
    try{

        const newUser = await User.create(req.body); 
        res.json(newUser);

    }catch(err){
        throw new Error(err);
    }
});

// [GET] user/all
const getAllUser = expressAsyncHandler(async(req,res) => {
    try{

        const allUser = await User.find(); 
        res.json(allUser);

    }catch(err){
        throw new Error(err);
    }
});

// [GET] user/:id
const getUser = expressAsyncHandler(async(req,res) => {
    try{

        const {id} = req.params;
        const user = await User.find(id); 
        res.json(user);

    }catch(err){
        throw new Error(err);
    }
});

// [PUT] user/:id
const updateUser = expressAsyncHandler(async(req,res) => {
    try {

        const {id} = req.params;
        const updateUserID = await User.findByIdAndUpdate(id,req.body,{new:true});
        res.json(updateUserID);
        
    } catch (err) {
        throw new Error(err);
    }
});

// [DELETE] user/:id
const deleteUser = expressAsyncHandler(async(req,res) => {
    try {

        const {id} = req.params;
        const removeUser = await User.findByIdAndDelete(id);
        res.json(removeUser);
        
    } catch (err) {
        throw new Error(err);
    }
});


// [PUT] user/block/:id
const blockUser = expressAsyncHandler(async(req,res)=>{
    const {id} = req.params;
    try{
        const block = await User.findByIdAndUpdate(
        id,{
            isBlocked: true,
        },{
            new: true,
        });
        res.json({
            message : "User Blocked",
        })
    }catch(error){throw new Error(error);}
});

// [PUT] user/password
const updatePassword = expressAsyncHandler(async(req,res)=>{
    const {_id}=req.user;
    const {password} =req.body;
    const user = await User.findById(_id);
    if(password){
        user.password=password;
        const updatePassword = await user.save();
        res.json(updatePassword);
    }else{
        res.json(user);
    }
})

export {createUser,getAllUser,getUser
    ,updateUser,deleteUser,blockUser,updatePassword}