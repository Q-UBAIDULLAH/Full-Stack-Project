import getorder from "../services/get.js";

const getorderController=async(req,res)=>{
try {
    const userId=req.user._id
    console.log("userId",userId)
  await  getorder(userId)
        res.status(200).send({ status:200,message:"get order" });
} catch (error) {
        res.status(500).send({ status:500, message: error.message });
}
}
export default getorderController