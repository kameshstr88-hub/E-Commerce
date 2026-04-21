import express from "express";
import Cart from "../models/Cart.js";

const router = express.Router();

// GET CART
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });

    if (!cart) {
      return res.json({ items: [] });
    }

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ADD TO CART
router.post("/add", async (req, res) => {
  try {
    const { userId, product } = req.body;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: [product],
      });
    } else {
      const existing = cart.items.find((item) => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        cart.items.push(product);
      }
    }

    await cart.save();

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// REMOVE FROM CART
router.post("/remove", async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.json({ items: [] });
    }

    cart.items = cart.items.filter((item) => item.id !== productId);

    await cart.save();

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;