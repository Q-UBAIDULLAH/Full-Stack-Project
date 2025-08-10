import mongoose, { Schema } from "mongoose";

const Signup_Schema=new Schema({

    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const USER=mongoose.model('user',Signup_Schema)


export default USER