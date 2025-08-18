import getData from "../services/get.js"

const getController=async(req,res)=>{
try {
console.log("Query",req.query)
       const Data=await getData(req.query)
        res.status(200).send({status:200,data:Data})

} catch (error) {
        res.status(500).send({status:500,message:"Internal server Error"})
}
}
export default getController