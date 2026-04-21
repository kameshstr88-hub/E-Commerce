import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: String,
  products: [
    {
      id: Number,
      name: String,
      price: Number,
      images: [String],
      quantity: { type: Number, default: 1 },
    },
  ],
});

export default mongoose.model("Cart", cartSchema);