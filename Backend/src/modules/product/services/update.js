import { updateById } from "../db/index.js"

const updateData=async(id,Body)=>{
    console.log("BODY",Body,id)
await updateById(id,Body)
}
export default updateData