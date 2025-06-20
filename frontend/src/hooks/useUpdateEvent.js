import React, { useState } from 'react'
import toast from 'react-hot-toast';

function handleInputErrors ({name,date,location,description}){
    if(!name||!date||!location||!description){
        toast.error("Please fill all the fields ")
        return false

    }
    return true
}

const useUpdateEvent = () => {
    const [loading,setLoading]=useState('');
    const updateEvent=async({name,date,location,description})=>{
      const success=handleInputErrors({name,date,location,description});
      setLoading(true)
      
      try {
          const response = await fetch('/api/upevent', {
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, date, location, description })
  
          })
          const data = await response.json();
          if(data.error){
              toast.error(data.error)  
              return 
          }
          else{
              toast.success(data.message)
          }
  
  
          
      } catch (error) {
          toast.error(error.message)
          
      }
      finally{
          setLoading(false)
      }
      
    }
    return {loading,updateEvent};
}

export default useUpdateEvent
