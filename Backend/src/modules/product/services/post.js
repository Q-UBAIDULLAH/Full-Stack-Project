import { AddData } from "../db/index.js"

const postData=async(Body)=>{
   console.log("BODY POSTDATA",Body)
 await AddData(Body)
}
export default postData