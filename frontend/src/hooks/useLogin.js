import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../cotext/authContext'
import { useNavigate } from 'react-router-dom'


function handleInputErrors ({userName,password}){
    if(!userName||!password){
        toast.error("Please fill all the fields ")
        return false

    }
   
    if(password.length<6){
        toast.error("Password must be at least 6 characters long")
        return false
        }

    return true
    }

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} =useAuthContext();
    const navigate=useNavigate()
const login = async ({userName,password}) => {
    const success=handleInputErrors({userName,password})
    if(!success) return
        setLoading(true)
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userName, password })
            })

            const data = await response.json()
            
            if (data.error) {
                throw new Error(data.error)
                return
            }
            else{
                toast.success(data.message)
                
            }
            localStorage.setItem("auth-user",JSON.stringify(data))
            setAuthUser(data)
            
            navigate("/home")
            
        

        } catch (error) {
            toast.error(error.message)

        }
        
        finally {
            setLoading(false)
        }

    }
    return { login, loading }
}

export default useLogin;
