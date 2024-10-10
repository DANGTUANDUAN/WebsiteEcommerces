import mongoose from "mongoose";

const connectDB = () => {
    try{
        // const conn = mongoose.connect("mongodb://localhost:27017/MyApp");
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log("Connect Database success")
    }
    catch(error){
        console.log("Connect Database error");
        console.log(error);
    }
};

export {connectDB};