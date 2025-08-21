import productModel from "../../product/model/product.js"
import { postCartdb } from "../db/index.js";
import CartModel from "../model/cart.js"


const addtocart=async(userId,productId,quantity)=>{


  let cart = await CartModel.findOne({ user: userId });
    const product = await productModel.findById(productId);
    console.log("product",product)
  if (!product) throw new Error("Product not found");
   if (!cart) {
    // agar cart nahi hai to naya banao
    cart = new CartModel({
      user: userId,
      items: [{ product: productId, quantity }],
      totalPrice: product.price * quantity,
    });
  } else {
    // agar cart hai to item update ya add karo
    const idx = cart.items.findIndex(
      (item) => item.product.toString() === productId.toString()
    );

    if (idx > -1) {
      cart.items[idx].quantity += quantity;
    } 
    else {
      cart.items.push({ product: productId, quantity });
    }

    // totalPrice dobara calculate
    cart.totalPrice = await calculateTotal(cart);
  }
 await cart.save();
  return cart;
}
const calculateTotal = async (cart) => {
  await cart.populate("items.product", "price");
  return cart.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
};
export default addtocart