import React, { useState } from 'react'
import './Signup.css'
import logo from '../Images/logo.jpg'
import { RxDragHandleDots1 } from 'react-icons/rx'
import useSignup from '../../hooks/useSignup'
import { useNavigate } from 'react-router-dom'

const signup = () => {
    const [input,setInputs]=useState({
        fullName:"",
        userName:"",
        rollNumber:"",
        phoneNumber:"",
        password:"",
        confirmPassword:""

    });
    
    const {loading,signup}=useSignup();
    const navigate=useNavigate();
    
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        signup(input)
    }
    return (
        <>
      <form onSubmit={handleSubmit}>
            <div className="back">
                <div id='signup-card'>
                    <div id='inner-most'>
                        <div>
                            <img src={logo} alt="logo" className='imge' />
                        </div>
                        <label htmlFor="subj" id='fname'>FullName</label>
                        <input id='fnm' type="text" 
                        value={input.fullName}
                        onChange={(e)=>setInputs({...input,fullName:e.target.value})} 
                        /> <br />
                        <label htmlFor="roll" id='fname'>Username</label>
                        <input id='fnm' type="text"
                        value={input.userName}
                        onChange={(e)=>setInputs({...input,userName:e.target.value})}

                         /> <br />
                        <label htmlFor="roll" id='rlno'>RollNumber</label>
                        <input id='rolno' type="text" 
                        value={input.rollNumber}
                        onChange={(e)=>setInputs({...input,rollNumber:e.target.value})}
                        
                        /> <br />
                        <label htmlFor="roll" id='phn'>PhoneNumber</label>
                        <input id='phnnum' type="text"
                        value={input.phoneNumber}
                        onChange={(e)=>setInputs({...input,phoneNumber:e.target.value})}
                        
                        /> <br />
                        <label htmlFor="roll" id='pswd'>Password</label>
                        <input id='pass' type="password" 
                        value={input.password}
                        onChange={(e)=>setInputs({...input,password:e.target.value})}
                        /> <br />
                        <label htmlFor="roll" id='cpswd'>Confirm Password</label>
                        <input id='cpass' type="password"
                        value={input.confirmPassword}
                        onChange={(e)=>setInputs({...input,confirmPassword:e.target.value})}
                        /> <br />
                        {/* <p className='signup'>Already have an account? <a href="" className='atag'>Login</a></p> */}
                        <button id='sbutn'>Signup</button>

                    </div>
                </div>
            </div>
            
         </form>
        </>
    )
}

export default signup












// import React, { useState } from 'react'
// import './Signup.css'
// import logo from '../Images/logo.jpg'
// const signup = () => {
//     const [input,setInputs]=useState({
//         fullName:"",
//         userName:"",
//         rollNumber:"",
//         phoneNumber:"",
//         password:"",
//         confirmPassword:"":

//     })
//     return (
//         <>
//             <div className="back">
//                 <div id='signup-card'>
//                     <div id='inner-most'>
//                         <div>
//                             <img src={logo} alt="logo" className='imge' />
//                         </div>
//                         <label htmlFor="subj" id='fname'>FullName</label>
//                         <input id='fnm' type="text" 
//                         value={input.fullName}
//                         onChange={(e)=>setInputs({...input,fullName:e.target.value})} 
//                         /> <br />
//                         <label htmlFor="roll" id='fname'>Username</label>
//                         <input id='fnm' type="text"
//                         value={input.userName}
//                         onChange={(e)=>setInputs({...input,userName:e.target.value})}

//                          /> <br />
//                         <label htmlFor="roll" id='rlno'>RollNumber</label>
//                         <input id='rolno' type="text" 
//                         value={input.rollNumber}
//                         onChange={(e)=>setInputs({...input,rollNumber:e.target.value})}
                        
//                         /> <br />
//                         <label htmlFor="roll" id='phn'>PhoneNumber</label>
//                         <input id='phnnum' type="text" /> <br />
//                         <label htmlFor="roll" id='pswd'>Password</label>
//                         <input id='pass' type="password" /> <br />
//                         <label htmlFor="roll" id='cpswd'>Confirm Password</label>
//                         <input id='cpass' type="password" /> <br />
//                         {/* <p className='signup'>Already have an account? <a href="" className='atag'>Login</a></p> */}
//                         <button id='sbutn'>Signup</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default signup
