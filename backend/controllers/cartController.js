import Cart from "../models/Cart.js";

export const saveCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const items = req.body.items;

    let cart = await Cart.findOne({ user: userId });

    if (cart) {
      cart.items = items;
      await cart.save();
    } else {
      cart = await Cart.create({
        user: userId,
        items,
      });
    }

    res.json({ message: "Cart saved", cart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.json({ items: [] });
    }

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};