import mongoose, { Schema } from "mongoose";

const orderSchema=new Schema({

    user:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
         required: true,
    },
    items:[{

        product:{
            type:mongoose.Schema.ObjectId,
            ref:'product',
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
    },
],
  totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
    paymentStatus: {
      type: String,
      enum: ["Unpaid", "Paid", "Refunded"],
      default: "Unpaid",
    },
    address: {
      type: String,
      required: true,
    },
},
  { 
    timestamps: true 
})
const OrderModel=mongoose.model('Order',orderSchema)
export default OrderModel