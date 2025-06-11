import express from "express";
import { mongoDBURL, PORT } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors';


const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    console.log(req);
    return res.status(234).send('Welcome to MERN Stack tutorial')
});

app.use(cors());

// app.use(
//     cors({
//         origin: 'http/localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )

app.use('/books', booksRoute);


mongoose.connect(mongoDBURL).then(()=>{
    console.log("App is connected to database");
    app.listen(PORT, ()=>{
        console.log(`App is listening to port: ${PORT}`);
    });
}).catch((error)=>{
    console.log(error);
});