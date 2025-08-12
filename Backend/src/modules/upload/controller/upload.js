import uploadFile from "../services/upload.js"


const uploadController=async(req,res)=>{
    try {
        console.log("uploadController",req.file)
       const file=await uploadFile(req.file)
       res.status(200).send({status:200,url:file.url})
    } catch (error) {
            res.status(500).send({status:500,Message:"internal uploader error"})
    }

}
export default uploadController