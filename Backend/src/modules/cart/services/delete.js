import CartModel from "../model/cart.js"

const removeItem=async(userId,productId)=>{
let cart=await CartModel.findOne({user:userId}).populate("items.product","price")
console.log("CART",JSON.stringify(cart,null,2))
 if(!cart){
        return{message:"Cart Not found"}
    }
    let remove=cart.items.filter((item)=>item.product._id.toString() !== productId)
    console.log("remove",remove)
    cart.items=remove
   let total=0
    for(let i=0;i<cart.items.length;i++){
        total+=cart.items[i].quantity * cart.items[i].product.price
    }
  cart.totalPrice = total;
  await cart.save()
}
export default removeItem