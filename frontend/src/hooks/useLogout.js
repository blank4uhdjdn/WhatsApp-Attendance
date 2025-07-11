
import { useState } from 'react'
import { useAuthContext } from '../cotext/AuthContext';
import { toast } from 'react-hot-toast';

function useLogOut() {
  const [loading,setloading]=useState(false);
  const{setAuthUser}=useAuthContext()
  const logout= async ()=>{
      setloading(true);
    try {
        const res = await fetch("/api/logout",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
        })
        const data=await res.json()
        if (data.error) {
            throw new Error(data.error)
        }
        localStorage.removeItem("chat-user")
        setAuthUser(null)
        
    } catch (error) {
        toast.error(error.message)
    }
    finally{
        setloading(false);

    }
  }
  return{loading,logout}
}

export default useLogOut;
