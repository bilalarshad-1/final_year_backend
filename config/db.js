import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://dulanjalisenarathna93:E2JUb0zfaT2FVp8D@cluster0.exkxkun.mongodb.net/reactjs-food-delivery-app');
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection failed', error);
        process.exit(1); // Exit process if DB connection fails
    }
};
