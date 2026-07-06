import express from 'express';

import dotenv from "dotenv";
import connectDB from './db/database.js';
import userRoute from './routes/user.js'
import todoRouter from './routes/todo.js'
import cookieParser from "cookie-parser"

dotenv.config();

connectDB();
const app = express();
app.use(express.json())
app.use(cookieParser())
app.use("/api/v1/user",userRoute);
app.use("/api/v1/todo",todoRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT,
    ()=>{
        console.log(`Server listen at port ${PORT}`);
     
        
    }
)