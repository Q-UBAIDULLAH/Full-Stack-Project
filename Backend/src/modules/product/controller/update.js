import updateData from "../services/update.js"

const updateController=async(req,res)=>{
    try {
        const{id}=req.params
        console.log("ID",req.body)
      await updateData(id,req.body)
         res.status(200).send({status:200,message:"user Updated successfully"})
    } catch (error) {
         res.status(500).send({status:500,message:"Internal code error"})
    }

}

export default updateController