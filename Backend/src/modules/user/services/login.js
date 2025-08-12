import generateToken from "../../../../config/Token_Generate.js"
import { getuser } from "../db/index.js"
import bcrypt from 'bcrypt'

const loginuser=async(Body)=>{

    try {
        const finduser=await getuser(Body)


if(finduser){
         const check_password=bcrypt.compareSync(Body.password, finduser.password)
  
   

   if(check_password){
   let token=generateToken(finduser.email)
    return { status: 200, message: "Login successfully",token };

   }
   else{
 return { status: 401, message: "Incorrect password" }
   }
}

else{
  return { status: 404, message: "User not found" };
}
    } catch (error) {
        return {status:500,message:"No Data",error}
    }



}
export default loginuser