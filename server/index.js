import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'

import userRouter from './routes/users.js';
import videoRouter from './routes/videos.js';
import commentRouter from './routes/comments.js';
import authRouter from './routes/auth.js';

const app = express();
dotenv.config()

const connect =()=> {
    mongoose.connect(process.env.MONGO).then(() =>{
        console.log('Connected to DB');
    }).catch(err => {
        throw err;
    });
}

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/videos", videoRouter);
app.use("/api/comments", commentRouter);

app.use((err, req, res, next)=>{
    const status = err.statusCode || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message
    });
})

app.listen(3000, () => {
    connect();
    console.log('Server is running on port 3000');
});