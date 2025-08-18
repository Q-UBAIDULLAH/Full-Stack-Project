import productModel from "../model/product.js"


const AddData=((Body)=>{
console.log("POST DB",Body)
 productModel(Body).save()
})

const getAll=(async()=>{
  return await productModel.find()

})

const getAggregate=(async(pipeline)=>{
return await productModel.aggregate(pipeline)
})

const deleteById=(async(id)=>{
await productModel.findByIdAndDelete(id)
})
const updateById=(async(id,Body)=>{
await productModel.findByIdAndUpdate(id,Body)
})


export{
    AddData,
    getAll,
    deleteById,
    updateById,
    getAggregate
}