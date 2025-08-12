import { AddData } from "../db/index.js"

const postData=async(Body)=>{
   
 await AddData(Body)
}
export default postData