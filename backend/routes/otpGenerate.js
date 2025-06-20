const express =require("express");
const { handleGenerateOtp } = require("../controllers/generateOtp");





const router=express.Router();


router.post('/otp',handleGenerateOtp)



module.exports=router