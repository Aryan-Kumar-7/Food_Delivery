import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://rajaryankumar26april2002:9889788246raK@cluster0.h1foya2.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}