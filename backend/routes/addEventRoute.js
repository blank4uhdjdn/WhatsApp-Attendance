const express =require("express");
const { addEvent, getEvents, updateEvent, deleteEvent } = require("../controllers/addEvent");

const router=express.Router();


router.post('/addevent',addEvent)
router.get('/getevent',getEvents)
router.patch('/upevent',updateEvent)
router.delete('/delevent',deleteEvent)

module.exports=router