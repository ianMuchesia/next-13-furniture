const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
  quantity: { type: Number, required: true },
  totalPrice:{
    type:Number,
    required:true,
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: true,
  },
});

const CartSchema = new Schema(
  {
    subtotal: {
      type: Number,
      required: true,
    },
    CartItems: [CartItemSchema],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
