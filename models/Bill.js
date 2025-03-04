import mongoose from "mongoose";

const billSchema = new mongoose.Schema({
  billId: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  items: [
    {
      productName: String,
      price: Number,
      quantity: Number,
      total: Number,
    },
  ],
  totalAmount: { type: Number, required: true },
});

const Bill = mongoose.model("Bill", billSchema);
export default Bill;
