import updateCart from "../services/update.js"

const updateCartController=(req,res)=>{
try {
    const{userId,productId,quantity}=req.body
        updateCart(userId,productId,quantity)
    res.status(200).send({status:200,message:"Cart Updated"})
} catch (error) {
       res.status(400).send({status:400,message:"Cart Not Updated"})
}
}
export default updateCartController