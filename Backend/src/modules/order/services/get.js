import OrderModel from "../model/order.js"

const getorder=async(userId)=>{
const order=await OrderModel.find({user:userId}).populate('items.product','title price')
console.log("order", JSON.stringify(order, null, 2))
}
export default getorder