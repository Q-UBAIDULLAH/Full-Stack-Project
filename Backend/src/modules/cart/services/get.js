import CartModel from "../model/cart.js"

const getCart=async(userId)=>{

const cart=await CartModel.findOne({user:userId})                                                                                                                                                                                                                                                       
.populate("items.product", "title price image")
console.log("CART",JSON.stringify(cart, null, 2))
if(!cart){
    return{status:404,message:"Cart Not Found"}
}

}
export default getCart