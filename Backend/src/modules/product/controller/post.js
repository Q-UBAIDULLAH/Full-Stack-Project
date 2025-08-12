// import uploadFile from "../../upload/services/upload.js"
import UploadToCloudinary from "../services/cloudinary.js"
import postData from "../services/post.js"

const PostController=async(req,res)=>{

try {
     // uploadFile()
     console.log("Request",req.body.title)
     console.log("Request",req.body.price)
     console.log("Request",req.body.description)
     console.log("REQ FILE",req.file)
   const result=await UploadToCloudinary(req.file)
   console.log("result",result.secure_url)
   const newproduct={
    title:req.body.title,
    price:req.body.price,
    description:req.body.description,
    image:result.url
   }
  
     //  await postData(req.body)
      await postData(newproduct)
       res.status(200).send({status:200,message:"Data Added"})
} catch (error) {
     res.status(500).send({status:500,Message:"internal server error",error})
}

}
export default PostController