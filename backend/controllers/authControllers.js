
const { resolvePath } = require("react-router-dom");
const TeacherUser = require("../models/TeacherUser");
const { generateTokenAndSetCookie } = require("../utils/generateToken")
const bcrypt = require("bcryptjs");
const axios=require("axios");
const MainTeach = require("../models/mainTeach");

const handleSignUp = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword,phoneNumber,rollNumber } = req.body;

        if (!fullName || !userName || !password || !confirmPassword || !phoneNumber || !rollNumber) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        const user=await TeacherUser.findOne({userName})
        
        if(user){
            return res.status(400).json({error:"User already exists"})
        }
        const rollUser=await TeacherUser.findOne({rollNumber})
        if(rollUser){
            return res.status(400).json({error:"Roll Number already exists"})
        }


        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        const newTeacher= new TeacherUser({
            fullName:fullName,
            userName:userName,
            password:hashedPassword,
            phoneNumber:phoneNumber,
            rollNumber:rollNumber
        })

        if(newTeacher){
            await newTeacher.save();
            res.status(201).json({
                message:"you have been registered successfully",
                user:{
                id:newTeacher._id,
                fullName:fullName,
                userName:userName,  
                phoneNumber:phoneNumber,
                rollNumber:rollNumber
            }
            })
        }
        

        else{
            res.status(500).json({error:"invalid user data "})
        }
       
    } catch (error) {
        console.log(`Error in signup controller: ${error.message}`);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const handleLogin = async (req, res) => {
    try {
        const { userName, password } = req.body;
        if (!userName || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const user = await TeacherUser.findOne({ userName })
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!user || !isPasswordCorrect) {
            
            return res.status(400).json({ error: "invalid usename or password" })
            
        }

        generateTokenAndSetCookie(user._id, res)


        res.status(200).json({
            message: "you have logged in successfully",
            _id: user._id,
            userName: user.userName,
            fullName: user.fullName,
            phoneNumber: user.phoneNumber,
            rollNumber: user.rollNumber
            
        })

    } catch (error) {
        console.log(`error in login controller ${error.message}`)
        res.status(500).json({ error: "internal server error" })

    }
}
const handleTeachLogin = async (req, res) => {
    try {
        const { userName1, password1 } = req.body;
        if (!userName1 || !password1) {
            return res.status(400).json({ error: "login in succesfull!" })
        }
        const user = await MainTeach.findOne({ userName1 })
        const isPasswordCorrect = await bcrypt.compare(password1, user?.password1|| "");
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "invalid usename or password" })
            
        }

        generateTokenAndSetCookie(user._id, res)


        res.status(200).json({
            message: "you have logged in successfully",
            _id: user._id,
            userName1: user.userName1,
            fullName: user.fullName,
            phoneNumber: user.phoneNumber,
            rollNumber: user.rollNumber
            
        })

    } catch (error) {
        console.log(`error in login controller ${error.message}`)
        res.status(500).json({ error: "internal server error" })

    }
}

const handleLogOut = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "logged out successfully" })
    } catch (error) {
        console.log(`error in logout controller ${error.message}`);
        res.status(500).json({ error: "internal server error" });
    }

}

module.exports = { handleSignUp, handleLogin, handleLogOut,handleTeachLogin };
