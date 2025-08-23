import CartModel from "../../cart/model/cart.js"
import productModel from "../../product/model/product.js"
import OrderModel from "../model/order.js"

const OrderPost=async(userId,address)=>{
const cart=await CartModel.findOne({user:userId}).populate('items.product','price')
console.log("cart",cart)
if(!cart){
    return{status:404,message:"Cart Not Found"}
}

let total=0
for(let i=0;i<cart.items.length;i++){
  const product= cart.items[i].product
    console.log("Product",product)
  total+=product.price*cart.items[i].quantity
  console.log("total",total)

}

const order=new OrderModel({
    user:userId,
    items:cart.items,
    totalPrice:total,
    address
})
console.log("order", JSON.stringify(order, null, 2))
await order.save()
  cart.items = [];
  cart.totalPrice = 0;
  await cart.save();
  return order
}
export default OrderPost