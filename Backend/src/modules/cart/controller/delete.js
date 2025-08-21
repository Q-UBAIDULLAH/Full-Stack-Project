import removeItem from "../services/delete.js"

const removeCartController=(req,res)=>{
try {
    const{userId,productId}=req.body
    removeItem(userId,productId)
        res.status(200).send({status:200,message:"product deleted successfully"})
} catch (error) {
          res.status(500).send({status:500,message:"Internal code error"})
    
}
}
export default removeCartController