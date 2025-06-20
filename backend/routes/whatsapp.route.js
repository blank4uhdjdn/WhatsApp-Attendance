const express =require("express");
const { markAttendance, getAttendance, updateAttendance,sendSubjectWiseAttendance } = require("../controllers/markController");
const router=express.Router();


router.post('/mark',markAttendance)
router.post('/get',getAttendance)
router.patch('/update',updateAttendance)
router.post('/attsummary',sendSubjectWiseAttendance)

module.exports=router