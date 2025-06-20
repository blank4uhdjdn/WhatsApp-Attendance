const mongoose =require("mongoose")

const eventSChema= new mongoose.Schema({
    name:{
        type:String,
        required:true,


    },
    date:{
        type:Date,
        required:true,
        unique:true

    },
    location:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true

    }
},{timeStamps:true})

const Event=mongoose.model("Event",eventSChema)
module.exports=Event;
