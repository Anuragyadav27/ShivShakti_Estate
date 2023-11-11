require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB).then(() => {
    console.log('Connected to Database');
}).catch((err) =>{
   console.log(err);
});

const app = express();

app.listen(3000,() => {
    console.log('listening on port 3000!!');
    }
)