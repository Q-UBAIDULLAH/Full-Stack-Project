import "dotenv/config.js"
const Tokenverification=(req,res,next)=>{
try {
    if(req.headers.authorization){
const token=req.headers.authorization.split(" ")[1]
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if(decoded){
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
export default Tokenverification