import mongoose from "mongoose";
import { URI } from "./config.js";

export const connectDB = async () => {
try {
    await mongoose.connect(
    "mongodb+srv://legalle:0420@cluster0.32uokwb.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("MongoDB is connected");
} catch (error) {
    console.error(error);
}
};
