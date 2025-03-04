import express from "express";
import { placeOrder, getTableOrders, listOrders, updateStatus } from "../controllers/restaurantOrderController.js";

const orderRouter = express.Router();


orderRouter.post("/place", placeOrder);


// orderRouter.get("/table/:tableNumber", getTableOrders);


orderRouter.get("/", listOrders);


orderRouter.post("/status", updateStatus);

export default orderRouter;
