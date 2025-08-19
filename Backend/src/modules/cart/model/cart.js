import mongoose,{ Schema } from "mongoose";



const cartSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
      required: true,
      unique: true, // har user ka ek cart
    },
    items: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
          default: 1,
        },
      },
    ],
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

 const CartModel=mongoose.model("Cart", cartSchema);
 export default CartModel
