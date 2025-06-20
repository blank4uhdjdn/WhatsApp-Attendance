const Event=require("../models/event")

const addEvent=async(req,res)=>{
   try {
    const {name,date,location,description}=req.body;
    if(!name||!date||!location||!description){
        return res.status(500).json({error:"All fields required"})   
    }
    
    const eventDate=new Date(date);
    const now=Date.now()
    if(eventDate<now){
      return res.status(500).json({error:"Event date cannot be in the past"})
     
    }
    const newEvent=new Event({
        name,date,location,description
    })
    if(!newEvent){
        return res.status(500).json({error:"No new event created"})
    }
    await newEvent.save()
    res.status(201).json({message:"Event created successfully"})

   } catch (error) {
    console.log(`internal server error ${error}`);
    if(error){
       return res.status(500).json({error:"date is preoccupied or not unique"})
    }
    res.status(500).json({error:"internal server error"})
    
   }

}

const getEvents=async(req,res)=>{
    try {
        const events = await Event.find();
        res.status(201).json(events);
      } catch (error) {
        console.log(`error in get evnent controller ${error}`);
        res.status(500).json({ error: err.message });
      }

}

const updateEvent= async(req,res)=>{
    try {
        const {name,date,location,description}=req.body;
        const event= await Event.findOne({name})
        if(!event){
            return res.status(500).json({error:"Event not found"})
        }
        event.name=name                                                                                                 
        event.date=date
        event.location=location
        event.description=description
        await event.save()
        res.status(201).json({message:"Event updated successfully"}) 
    } catch (error) {
        console.log(`error in update event controller ${error}`);
        return res.status(500).json({error:'internal server  error'}) 
    }

}
const deleteEvent = async (req, res) => {
    const { name } = req.body;

    try {
        const deletedEvent = await Event.findOneAndDelete({ name });

        if (!deletedEvent) {
            return res.status(404).json({ error: "Event not found" });
        }

        res.status(200).json({ message: "Event deleted successfully", deletedEvent });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred", details: error.message });
    }
};


module.exports={addEvent,getEvents,updateEvent,deleteEvent,}