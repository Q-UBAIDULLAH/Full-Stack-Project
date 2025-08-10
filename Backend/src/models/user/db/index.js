import USER from "../model/user.js";

const adduser=((Body)=>{
    console.log(Body)
 USER(Body).save()

})

const getuser=async(Body)=>{
    const{email,password}=Body
    console.log(email,password)
const user=await USER.findOne({email})
return user
console.log("users",users)
}


export{
    adduser,
    getuser
}