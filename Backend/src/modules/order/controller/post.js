import OrderPost from "../services/post.js";

const postOrderController=async(req,res)=>{

    try {
const userId=req.user._id
console.log("userID",userId)
const{address}=req.body

let result=await OrderPost(userId,address)

            res.status(201).send({ status: 201,message:"order post",order:result });
    } catch (error) {
            res.status(400).send({ status:400, message: error.message });
    }
}
export default postOrderController