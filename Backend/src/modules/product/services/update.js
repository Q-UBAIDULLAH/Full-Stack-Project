import { updateById } from "../db/index.js"

const updateData=async(id,Body)=>{
await updateById(id,Body)
}
export default updateData