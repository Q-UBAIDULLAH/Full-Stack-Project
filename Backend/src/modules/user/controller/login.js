import loginuser from "../services/login.js"

const loginController=async(req,res)=>{
    try {
        console.log(req.body)
const result=await loginuser(req.body)
console.log(result)
res.status(200).send(result)
    } catch (error) {
        res.status(500).send({status:500,error})
    }

}
export default loginController