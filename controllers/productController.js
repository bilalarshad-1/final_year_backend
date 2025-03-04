import Product from "../models/Product.js"; // ✅ Correct import


// Get All Products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a New Product
export const addProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = new Product({ name, price });
    await newProduct.save();
    res.json({ message: "✅ Product added successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
