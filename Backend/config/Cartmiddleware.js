import "dotenv/config.js"
import jwt from "jsonwebtoken"
import USER from "../src/modules/user/model/user.js"

const authMiddleware=async (req,res,next)=>{
try {
    if(req.headers.authorization){
const token=req.headers.authorization.split(" ")[1]
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if(decoded){
    const user = await USER.findOne({ email: decoded.email });
    console.log("user",user)
        req.user = user; 
next()
  }
else{
    res.status(500).send({status:500,message:"Token Unauthorize"})
}

    }
    else{
    res.status(500).send({status:500,message:"Token Not Provided"})
    }

} catch (error) {
       res.status(500).send({status:500,message:"Token Unauthorize"})
}
}
export default authMiddleware