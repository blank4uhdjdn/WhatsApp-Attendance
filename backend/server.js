//package imports 

const express= require("express");
const mongoose = require('mongoose');
const dotenv=require("dotenv")



// file and method imports : 
const Message=require("./models/messageModel")
const TeacherUser=require("./models/TeacherUser")
const Event=require("./models/event")
const MainTeach=require("./models/mainTeach")
const whatsapproute = require("./routes/whatsapp.route");
const authroutes=require("./routes/authroutes")
const otpGenerate=require("./routes/otpGenerate")
const addEventRoute=require("./routes/addEventRoute")



// global var definition : 

const app = express();
dotenv.config()


const PORT=process.env.PORT||8000;



const {connectToMongodb}=require("../db/connectToMongodb");
const bodyParser = require("body-parser");



//routes for getting and marking attendance 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',whatsapproute)
app.use('/api',authroutes)
app.use('/api',otpGenerate)
app.use('/api',addEventRoute)
 
app.use(express.static(path.join(__dirname,"../frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))

})



app.listen(PORT,()=>{
    connectToMongodb();
    console.log(`server is running on port ${PORT}`)
})