
import mongoose from "mongoose";
import dns from "dns";

dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`, {
            family: 4,
        });
        console.log("mongodb connected successfully");
    } catch (error) {
        console.log("error in connecting mongodb");
        throw error;
    }
}

export default connectDB;