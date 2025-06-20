import { toast } from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../cotext/authContext";

function handleInputErrors ({fullName,userName,rollNumber,phoneNumber,password,confirmPassword}){
    if(!fullName||!userName||!rollNumber||!phoneNumber||!password||!confirmPassword){
        toast.error("Please fill all the fields ")
        return false

    }
    if(password!==confirmPassword){
        toast.error("Passwords do not match")
        return false
    }
    if(password.length<6){
        toast.error("Password must be at least 6 characters long")
        return false
        }

    if(phoneNumber.length<10){
        toast.error("Phone number must be at least 10 digits long")
        return false
        
    }
    return true
    }

const useSignup=()=>{
    const [loading,setLoading]=useState(false);
    const {authUser,setAuthUser}=useAuthContext();
    const signup=async({fullName,userName,rollNumber,phoneNumber,password,confirmPassword})=>{
        const success=handleInputErrors({fullName,userName,rollNumber,phoneNumber,password,confirmPassword})
        if(!success) return
        setLoading(true);   

        try {
            const response = await fetch('/api/signup',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({fullName,userName,rollNumber,phoneNumber,password,confirmPassword}),

            }) ;
            const data = await response.json();
            if(data.error){
            toast.error(data.error)
            return

            }
            toast.success(data.message)

            localStorage.setItem("auth-user",JSON.stringify(data))
            setAuthUser(data)
            
        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setLoading(false);
        }
        
        
    };
    return {loading,signup};
}

export default useSignup;











// function handleInputErrors ({fullName,userName,rollNumber,phoneNumber,password,confirmPassword}){
//     if(!fullName||!userName||!rollNumber||!phoneNumber||!password||!confirmPassword){
//         toast.error("Please fill all the fields ")
//         return false

//     }
//     if(password!==confirmPassword){
//         toast.error("Passwords do not match")
//     }
//     if(password.length<6){
//         toast.error("Password must be at least 6 characters long")
//         }


//     return true
//     }
