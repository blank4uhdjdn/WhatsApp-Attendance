import React, { useState } from 'react'
import toast from 'react-hot-toast'

function handleInputErrors({name}){
    if(!name){
        toast.error("Please fill the name. ")
        return 
    }


}

const useDeleteEvent = () => {
  const [loading,setLoading]=useState('')
  
  const deleteEvent = async({name})=>{
    const success=handleInputErrors({name});
    if(success){
        setLoading(true)
    }
    try {
        const response = await fetch('/api/delevent', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({name}),
        })
        const data = await response.json()
        if(data.error){
            toast.error(data.error)
        }
        else{
            toast.success(data.message)
        }
        
    } catch (error) {
        
    }
    finally{
        setLoading(false)
    }

  }
  return {loading,deleteEvent};
}

export default useDeleteEvent
