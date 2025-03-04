import restaurantOrderModel from './../models/restaurantOrder.model.js';

// ✅ Place a new restaurant order (Waiter takes the order)
const placeOrder = async (req, res) => {
    try {
        console.log("Received Order Data:", req.body); // Debugging log

        if (!req.body.tableNumber) {
            return res.status(400).json({ success: false, message: "Table Number is required" });
        }

        const newOrder = new restaurantOrderModel({
            items: req.body.items,
            amount: req.body.amount,
            tableNumber: req.body.tableNumber, 
            status: "Food Processing"
        });

        await newOrder.save();
        res.json({ success: true, message: "Order placed successfully!", orderId: newOrder._id });
    } catch (error) {
        console.error("Order Placement Error:", error);
        res.status(500).json({ success: false, message: "Error placing order" });
    }
};


// ✅ Fetch all orders for a specific table
const getTableOrders = async (req, res) => {
    try {
        const orders = await restaurantOrderModel.find({ tableNumber: req.params.tableNumber });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error fetching table orders" });
    }
};

// ✅ List all restaurant orders (For kitchen/admin panel)
const listOrders = async (req, res) => {
    try {
        const orders = await restaurantOrderModel.find({});
        res.json({ success: true, data: orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error fetching orders" });
    }
};

// ✅ Update order status (Kitchen updates the status)
const updateStatus = async (req, res) => {
    try {
        await restaurantOrderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
        res.json({ success: true, message: "Order status updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error updating order status" });
    }
};

export { placeOrder, getTableOrders, listOrders, updateStatus };
