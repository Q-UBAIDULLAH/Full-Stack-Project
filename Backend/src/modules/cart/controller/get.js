import getCart from "../services/get.js"

const getCartController=async(req,res)=>{
    
try {
    const{userId}=req.params
    console.log("userId",userId)
  const result=await getCart(userId)
    res.status(200).send({status:200,message:"get data",result})

} catch (error) {
        res.status(500).send({status:500,message:error.message,messages:"Get Error"})
}
}
export default getCartController