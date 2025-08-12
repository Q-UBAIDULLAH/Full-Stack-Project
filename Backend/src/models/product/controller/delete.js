import deleteData from "../services/delete.js"

const deleteController=async(req,res)=>{
    try {
          const{id}=req.params
        await deleteData(id)
            res.status(200).send({status:200,message:"user deleted successfully"})
    } catch (error) {
          res.status(500).send({status:500,message:"Internal code error"})
    }

}
export default deleteController