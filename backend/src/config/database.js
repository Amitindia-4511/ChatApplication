import mongoose from "mongoose";
import { databaseName } from "../constant/databaseName.js";

async function connectDatabase(){
try {
    const MongoURI = `${process.env.MONGO_URI}/${databaseName}?retryWrites=true&w=majority&appName=RealTimeChatApplication`
    await mongoose.connect(MongoURI)
    console.log('Database is connected successfully');
    
    
} catch (error) {
    console.log('Error while connecting to the database server',error);
    process.exit(1)
}
}

export default connectDatabase;