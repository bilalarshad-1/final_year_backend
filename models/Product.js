import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

export default Product; // ✅ Ensure default export
