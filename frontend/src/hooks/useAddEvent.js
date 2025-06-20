import React, { useState } from 'react'
import toast from 'react-hot-toast';

function handleInputErrors ({name,date,location,description}){
    if(!name||!date||!location||!description){
        toast.error("Please fill all the fields ")
        return false
    }
    return true
}
    
   

const useAddEvent = () => {
  const [loading,setLoading]=useState('');
  const addEvent=async({name,date,location,description})=>{
    const success=handleInputErrors({name,date,location,description});
    if(success){
        setLoading(true)
    }
    
    try {
        const response = await fetch('/api/addevent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, date, location, description })

        })
        const data = await response.json();
        if(data.error){
            toast.error(data.error)  
            return false;
        }
        else{
            toast.success('Event Added Successfully')
            return true;
        }


        
    } catch (error) {
        toast.error(error.message)
        
    }
    finally{
        setLoading(false)
    }
    
  }
  return {loading,addEvent};
}


export default useAddEvent
