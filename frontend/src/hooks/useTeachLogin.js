import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../cotext/authContext'
import { useNavigate } from 'react-router-dom'


function handleInputErrors ({userName1,password1}){
    if(!userName1||!password1){
        toast.error("Please fill all the fields ")
        return false

    }
   
    if(password1.length<6){
        toast.error("Password must be at least 6 characters long")
        return false
        }

    return true
    }

const useLogin = () => {
    const [load, setLoad] = useState(false)
    const {setAuthUser} =useAuthContext();
    const navigate=useNavigate()
const teachlog = async ({userName1,password1}) => {
    const success=handleInputErrors({userName1,password1})
    if(!success) return
        setLoad(true)
        try {
            const response = await fetch("/api/teachlogin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userName1, password1 })
            })

            const data = await response.json()
            
            if (data.error) {
                throw new Error(data.error)
                
            }
            else{
                toast.success(data.message)
                
            }
            localStorage.setItem("auth-user",JSON.stringify(data))
            setAuthUser(data)
            navigate("/teachdash")
            
            
        

        } catch (error) {
            toast.error(error.message)
            return
        }
        
        finally {
            setLoad(false)
        }

    }
    return { teachlog, load}
}

export default useLogin;
