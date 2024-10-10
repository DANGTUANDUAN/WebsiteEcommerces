import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import queryString from 'query-string';
import {connectDB} from './config/mongoose.js';

import { productRouter } from './routes/productRoute.js';
import { userRouter } from './routes/userRoute.js';
import { cartRouter } from './routes/cartRoute.js';


// Config Enviroment variable 
dotenv.config();

// Set PORT = 4000 || 3001
const PORT = process.env.PORT || 3001;

const app = express()

// Connect Database MongoDB
connectDB();

// Read parameter from request body json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//
app.use('/product',productRouter);
app.use('/user',userRouter);
app.use('/cart',cartRouter)

// Runing Server at PORT = 4000 || 3001
app.listen(PORT,()=>{
    console.log(`Server is runing at Port ${PORT}`);
});

