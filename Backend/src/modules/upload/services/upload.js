import 'dotenv/config.js'
import { v2 as cloudinary } from 'cloudinary'
import fsExtra from 'fs-extra';

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});
const uploadFile=async(file)=>{
    return new Promise((resolve,reject)=>{
cloudinary.uploader
  .upload(`src/modules/upload/file/${file.filename}`)
  .then((result)=>{
    fsExtra.removeSync(`src/modules/upload/file/${file.filename}`)
    console.log("✅ Uploaded on Cloudinary");
console.log(result)
resolve(result)
  })
   .catch((error)=>{
        console.log("error",error)
reject(error)
  })
    })


}
export default uploadFile