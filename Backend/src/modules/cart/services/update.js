import CartModel from "../model/cart.js"

const updateCart=async(userId,productId,quantity)=>{

    let cart=await CartModel.findOne({user:userId})
    .populate("items.product", "price")
    console.log("CART",JSON.stringify(cart,null,2))
    if(!cart){
        return{message:"Cart Not found"}
    }

    let itemindex=-1
    for(let i=0;i<cart.items.length;i++){
        if(cart.items[i]._id.toString()===productId){
            itemindex=i
            break
            // cart.items[itemindex].quantity=quantity
        }
    }
     if(itemindex===-1){
                return{message:"Product not in cart"}
            }
             cart.items[itemindex].quantity=quantity
    let total=0
    for(let i=0;i<cart.items.length;i++){
        total+=cart.items[i].quantity * cart.items[i].product.price
    }
  cart.totalPrice = total;
  console.log("total",total)
  await cart.save();
}
export default updateCart