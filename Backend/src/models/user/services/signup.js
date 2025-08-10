import { adduser } from "../db/index.js"
import bcrypt from 'bcrypt'


const postSignup=async(Body)=>{
    const{email,username}=Body
    const hash_Password = bcrypt.hashSync(Body.password, 10);
await adduser({username,email,password:hash_Password})
}

export default postSignup