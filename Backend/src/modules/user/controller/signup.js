import postSignup from "../services/signup.js"

const Signupcontroller=async(req,res)=>{
    console.log("REQ BODY",req.body)

   await postSignup(req.body)
res.status(200).send("User signup successfully")
}
export default Signupcontroller