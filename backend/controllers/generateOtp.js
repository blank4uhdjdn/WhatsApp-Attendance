const express =require("express");
const Otp = require("../models/otp");

const handleGenerateOtp=async(req,res)=>{
    try {
        
        const otpCode = Math.floor(100000 + Math.random() * 900000);
        const otp=new Otp({
            generatedOtp:otpCode,
        })

        await otp.save();
        res.status(201).json({
            generatedOpt:otp.generatedOtp,
        })
        setTimeout(async () => {
            await Otp.deleteOne({ generatedOtp: otpCode });
          }, 20000);
   

        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error:{error:"internal server error"}})
        
    }
}

module.exports={
    handleGenerateOtp,
}
   