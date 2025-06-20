const express =require("express");
const { handleSignUp, handleLogin, handleLogOut, handleTeachLogin, } = require("../controllers/authControllers");

const router=express.Router();


router.post('/signup',handleSignUp)
router.post('/login',handleLogin)
router.post('/teachlogin',handleTeachLogin)
router.post('/logout',handleLogOut)


module.exports=router