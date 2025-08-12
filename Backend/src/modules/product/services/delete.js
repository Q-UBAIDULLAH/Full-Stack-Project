import { deleteById } from "../db/index.js"

const deleteData=(id)=>{
deleteById(id)
}
export default deleteData