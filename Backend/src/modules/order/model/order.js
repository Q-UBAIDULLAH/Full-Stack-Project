import mongoose, { Schema } from "mongoose";

const orderSchema=new Schema({

    user:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
         required: true,
    },
    

})
const OrderModel=mongoose.model('Order',orderSchema)