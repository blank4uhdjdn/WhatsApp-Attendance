const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    userName1:{
        type:String,
        required:true,
        unique:true,

    },
    password1:{
        type:String,
        required: true,
        minlength:6,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    rollNumber:{
        type:String,
        required:true,
        
    }
   
},{timestamps:true})

const MainTeach= mongoose.model("MainTeach",userSchema)

module.exports=MainTeach