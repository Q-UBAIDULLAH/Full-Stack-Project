import addtocart from "../services/post.js"

const additemController=(req,res)=>{
try {
  const userId=req.user._id
  const{product,quantity}=req.body
    console.log("REQ.USER",req.user._id)
    addtocart(userId,product,quantity)
        res.status(200).send({message:"addtocart"})
} catch (error) {
    res.status(400).send({message:error.message})
}
}
export default additemController