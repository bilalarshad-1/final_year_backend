import express from 'express';
import cors from 'cors';
import 'dotenv/config';

// Database connection
import { connectDB } from './config/db.js';

// Route imports
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import chefRoutes from './routes/chefRoutes.js';
import productRoutes from './routes/productRoutes.js';
import billRoutes from './routes/billRoutes.js';
import bookingRouter from './routes/booking.js'; // Import your booking router
import contactRoutes from "./routes/contactRoutes.js";
import restaurantOrderRouter from "./routes/restaurantOrderRouter.js";

// App configuration
const app = express();
const port = process.env.PORT || 4000; // Use environment variable for port

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/chefs', chefRoutes);
app.use("/api/products", productRoutes);
app.use("/api/bills", billRoutes);
app.use('/api/booking', bookingRouter); 
app.use("/api", contactRoutes);
app.use("/api/resorder", restaurantOrderRouter);
// Use /api/booking for booking routes


// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});



app.get("/", (req, res) => {
    res.send("Server is running!");
  });
  
// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});