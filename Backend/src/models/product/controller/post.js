import postData from "../services/post.js"

const PostController=async(req,res)=>{

try {
      await postData(req.body)
       res.status(200).send({status:200,message:"Data Added"})
} catch (error) {
     res.status(500).send({status:500,Message:"internal server error",error})
}

}
export default PostController