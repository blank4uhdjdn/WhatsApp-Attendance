const express=require("express")  
const Message=require("../models/messageModel")
const twilio=require("twilio")
const dotenv=require("dotenv")
dotenv.config()


const OTP=require("../models/otp")



const accountSid =process.env.accountSid;
const authToken = process.env.authToken
const twilioClient = twilio(accountSid, authToken);
const twilioWhatsAppNumber = process.env.twilioWhatsAppNumber


const now = new Date(Date.now());
const dateOnly = now.toISOString().split('T')[0]; 

// const getAttendance=async(req,res)=>{
//        try {
//         const {getSubject,getrollNumber}=req.body;
//         const attendance=await Message.find({ subject: getSubject, rollNumber: getrollNumber }).select("subject rollNumber status ")
//         if(attendance){
//            return res.json(attendance)
//         }
//         else{
//           res.json({message:"Attendance not found"})
//         }
       
//        } catch (error) {
//         res.status(500).json({error:"Internal sever error "})
//        }    
// }
const getAttendance = async (req, res) => {
    try {
      const { getSubject, getrollNumber } = req.body;
  
      // Fetch attendance data from the database for the given subject and roll number
      const attendance = await Message.find({
        subject: getSubject,
        rollNumber: getrollNumber
      }).select("subject rollNumber status createdAt");
  
      if (attendance.length > 0) {
        // Format the createdAt date to MM/DD/YYYY
        const formattedAttendance = attendance.map((item) => {
          return {
            ...item.toObject(),
            createdAt: new Date(item.createdAt).toLocaleDateString('en-US')  // Format date to MM/DD/YYYY
          };
        });
  
        return res.json(formattedAttendance);
      } else {
        return res.json({ message: "Attendance not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  

const markAttendance=async(req,res)=>{
        try {
            const {subject,rollNumber,status,phoneNumber,otp}=req.body
            if(!subject||!rollNumber||!status||!phoneNumber||!otp){
                return res.status(400).json({error:"All fields required"})
            }

            const validOtp=await OTP.findOne({generatedOtp:String(otp)})

            if(!validOtp){
                return res.status(400).json({error:"Invalid OTP"})
            }
            
            const newInput=new Message({
                subject:subject,
                rollNumber:rollNumber,
                status:status,
                phoneNumber:phoneNumber,
                otp:validOtp.generatedOtp,

            })
            if(newInput){

                await newInput.save()
                const attendanceMessage = `Hi👋, your attendance has been marked successfully👍.\n\nSubject: ${subject}\nRoll No: ${rollNumber}\nStatus: ${status} 🤚\n\nDate: ${dateOnly}`;


                await twilioClient.messages.create({
                    from: "whatsapp:+14155238886",
                    to: `whatsapp:+91${phoneNumber}`,
                    body: attendanceMessage


                })
                res.status(201).json({message:"Attendance marked successfully"})

            }  
        } catch (error) {
            console.log(error.message)
            res.status(500).json({ error: error.message });        }    
}

const updateAttendance=async(req,res)=>{
    try {
        const {subject,rollNumber,status,date} = req.body
        if(!subject||!rollNumber||!status||!date){
            res.status(400).json({error:"All fields are required"})
            return
        }
        student= await Message.findOne({subject:subject, rollNumber: rollNumber ,createdAt:date})
        if(!student){
            res.status(400).json({message:"record not found "})
            return
        }
        student.status=status
        await student.save()
        res.status(200).json({message:"Attendance updated successfully"})

        
    } catch (error) {
        console.log(`error n update attendance controller ${error.message}`)
        res.status(500).json({error:"internal server error"})
        return
    }
}
const sendSubjectWiseAttendance = async (req, res) => {
  try {
    const { subject, rollNumber, phoneNumber } = req.body;

    if (!subject || !rollNumber || !phoneNumber) {
      return res.status(400).json({ error: "Subject, Roll Number, and Phone Number are required" });
    }

    const records = await Message.find({ subject, rollNumber });

    if (!records.length) {
      return res.status(404).json({ error: "No attendance records found for this subject" });
    }

    const presentCount = records.filter((r) => r.status.toLowerCase() === "present").length;
    const total = records.length;
    const percentage = ((presentCount / total) * 100).toFixed(2);

    const message = `📚 Subject: ${subject}\n🆔 Roll No: ${rollNumber}\n✅ Present: ${presentCount}/${total}\n📊 Attendance: ${percentage}%`;

    await twilioClient.messages.create({
      from: "whatsapp:+14155238886",
      to: `whatsapp:+91${phoneNumber}`,
      body: message,
    });

    res.status(200).json({ message: "Attendance summary sent via WhatsApp" });
  } catch (error) {
    console.error("Error sending attendance summary:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};





module.exports={
    getAttendance,markAttendance,updateAttendance,sendSubjectWiseAttendance
}




