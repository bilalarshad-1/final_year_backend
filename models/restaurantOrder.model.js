import mongoose from "mongoose";

const restaurantOrderSchema = new mongoose.Schema({
    tableNumber: { type: Number, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ["Food Processing", "Out for delivery", "Delivered"], 
        default: "Food Processing"
    },
    date: { type: Date, default: Date.now }
});

// ✅ Export with ES Module syntax
export default mongoose.model("RestaurantOrder", restaurantOrderSchema);
