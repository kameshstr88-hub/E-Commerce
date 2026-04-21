import Product from "../models/Product.js";

// 🔥 GET ALL PRODUCTS
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch products",
      error: error.message,
    });
  }
};

// 🔥 ADD PRODUCT
export const addProduct = async (req, res) => {
  try {
    const { name, price, category, images } = req.body;

    const product = new Product({
      name,
      price,
      category,
      images,
    });

    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({
      message: "Unable to add product",
      error: error.message,
    });
  }
};

// 🔥 GET SINGLE PRODUCT
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch product",
      error: error.message,
    });
  }
};