import jwt from "jsonwebtoken"
import 'dotenv/config.js'


const generateToken=(email)=>{
  let token = jwt.sign({ email:email }, process.env.JWT_SECRET);
  return token
}

export default generateToken