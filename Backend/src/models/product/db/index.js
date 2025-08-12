import productModel from "../model/product.js"


const AddData=((Body)=>{

 productModel(Body).save()
})

const getAll=(async()=>{
  return await productModel.find()

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
    updateById
}