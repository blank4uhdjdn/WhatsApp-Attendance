const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
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

const TeacherUser= mongoose.model("TeacherUser",userSchema)

module.exports=TeacherUser  