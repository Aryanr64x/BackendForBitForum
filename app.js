import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { errorHandler } from './controllers/errorController.js';
import authRouter from './routes/authRouter.js';
import postRouter from './routes/postRouter.js';

const app = express();
app.use(express.json())
app.use(cors())


app.use('/api', authRouter);
app.use('/api/post', postRouter)

app.use(
    errorHandler
);


mongoose.connect('mongodb+srv://joharcoders:Aditya220972@cluster0.4jw13qz.mongodb.net/?retryWrites=true&w=majority')

app.listen(8000, ()=>{
    console.log("The server is now running at port 8000")
});