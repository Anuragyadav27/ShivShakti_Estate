import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';


mongoose.connect(process.env.MONGODB).then(() => {
    console.log('Connected to Database');
}).catch((err) =>{
   console.log(err);
});

const app = express();

app.use(express.json());


app.listen(3000,() => {
    console.log('listening on port 3000!!');
    }
)

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
