const mongoose=require("mongoose");

const messageSchema=new mongoose.Schema({
    subject:{
        type:String,
        required:true
    },
    rollNumber:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    otp:{
        type:Number,
        required:true
        
    }
},{timestamps:true})

const Message=mongoose.model("Message",messageSchema);

module.exports=Message