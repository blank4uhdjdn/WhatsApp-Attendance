import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useOptGen = () => {
    const [loading,setLoading]=useState(false);
    const [otpGen, setOtpGen] = useState(null);
    const genOtp=async()=>{
        try {
            const response = await fetch('/api/otp',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({})
            });
            const data = await response.json();
            if(data.error){
                toast.error(data.error)
                return 
            }
            else{
                setOtpGen(data);
                toast.success("Otp generated successfully");
                return data;
            }
            
        } catch (error) {
            toast.error(error.message)
            return 
            
        }
        finally{
            setLoading(false)
        }
        
     
    }
    return {genOtp,loading,otpGen};
}

export default useOptGen
