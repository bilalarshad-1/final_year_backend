import Bill from "../models/Bill.js";

// Save a new bill
export const saveBill = async (req, res) => {
  try {
    const { customerName, items, totalAmount } = req.body;
    const billId = "BILL" + Date.now();

    const newBill = new Bill({ billId, customerName, items, totalAmount });
    await newBill.save();

    res.json({ message: "✅ Bill saved successfully!", billId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all bills
export const getBills = async (req, res) => {
  try {
    const bills = await Bill.find({});
    res.json(bills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
