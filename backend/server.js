const express=require("express")
const app=express()
const dotenv=require("dotenv")
const cors=require("cors")
const mongoose=require("mongoose")

dotenv.config()

app.use(express.json())
app.use(cors())

const connectToMongo = async () => {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Connected to MongoDB");
  };
  
  connectToMongo();
 
app.listen(process.env.PORT,()=>console.log("port is running at 6000"))