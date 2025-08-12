import mongoose, { Schema } from "mongoose";

const Product_Schema=new Schema({
   
    title:{
        type:String,
        require:true
    },
    description:{
         type:String,
        require:true
    },
    price:{
          type:Number,
        require:true
    },
    image:{
     type:String,
    required:true
    }

},{
    timestamps:true
})
const productModel=mongoose.model('product',Product_Schema)
export default productModel