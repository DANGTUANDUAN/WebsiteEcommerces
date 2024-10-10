import expressAsyncHandler from "express-async-handler";
import { User } from "../models/userModel";
import jsonwebtoken from "jsonwebtoken";

const authMiddleware = expressAsyncHandler(async(req,res,next)=>{
    let token;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
        try{
           
            if(token){
                const decoded = jsonwebtoken.verify(token,process.env.JWT_SECRET);
                const user = await User.findById(decoded?.id);
                console.log(decoded?.id)
                req.user = user;
                next();
            }
            
        }catch(error){
            throw new Error("Not Authorized token expired , please login again")
        }
    }else{
        throw new Error("Not found Authorized token")
    }
});

export {authMiddleware};