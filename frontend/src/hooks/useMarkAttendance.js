
import  { useState } from 'react'
import toast from 'react-hot-toast'

function handleInputErrors ({subject,rollNumber,status,phoneNumber,otp}){
    if(!subject||!rollNumber||!status||!phoneNumber||!otp){
        toast.error("Please fill all the fields ")
        return false
    }
    

    if(phoneNumber.length<10){
        toast.error("Phone number must be at least 10 digits long")
        return false
        
    }
    if(otp.length<6){
        toast.error("OTP must be 6 digits long")
    }
    return true
    }


const useMarkAttendance =  () => {
    const [loading,setLoading]=useState(false)
    console.log()
    
    const markAttendance=async({subject,rollNumber,status,phoneNumber,otp})=>{
        setLoading(true)
        const success=handleInputErrors({subject,rollNumber,status,phoneNumber,otp})
        if(!success){
            setLoading(true)
        }
        try {
            const response = await fetch('/api/mark', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({subject,rollNumber,status,phoneNumber,otp}),
                });
                const data = await response.json();
                if(data.error){
                    toast.error(data.error)
                    return 
                }
                toast.success('Attendance marked successfully')


            
        } catch (error) {
            toast.error(error.message)
            
        }
        finally{
            setLoading(false)

        }
    }
    return {markAttendance,loading};

  
}

export default useMarkAttendance
