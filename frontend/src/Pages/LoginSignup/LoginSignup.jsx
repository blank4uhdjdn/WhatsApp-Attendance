import React, {  useState } from 'react'
import './LoginSignup.css'
import logo from '../Images/logo.jpg'
import { Link, useNavigate } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'
import useTeachLogin from '../../hooks/useTeachLogin'

import { use } from 'react'
// import { useAuthContext } from "../../cotext/AuthContext";
// const { authUser } = useAuthContext();


const LoginSignup = () => {
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [userName1,setUserName1]=useState('');
  const [password1,setPassword1]=useState('');
  


  const {login,loading}=useLogin();
  const {teachlog,load}=useTeachLogin();
 
  const hadleTeachSubmit=async(e)=>{
    e.preventDefault();
   await teachlog({userName1,password1})
   

  }
   
  const handleSubmit=async(e)=>{
    e.preventDefault();
   await login({userName,password})
  }
  
  return (
    <div className='back'>
      <form onSubmit={hadleTeachSubmit} className='card-te'>
      <div className=''>
        <div className='inner-most'>
          <div>
      <img src={logo} alt="logo" className='imge' />
          </div>
          <h4 className='login-as'>Login As Teacher</h4>
          <label htmlFor="subj" id='Subject'>Username</label>
          <input id='subjt' type="text" 
          value={userName1}
          onChange={(e) => setUserName1(e.target.value)}
          /> <br />
          <label htmlFor="roll" id='rollno'>Password</label>
          <input id='rollt' type="password" 
           value={password1}
           onChange={(e) => setPassword1(e.target.value)}
          /> <br />
          <button id='butn'>Login</button>
        </div>
        
      </div>
      </form>
      <form onSubmit={handleSubmit} className='card-st'>
      <div className=''>
        <div className='inner-most-student'>
        <div>
      <img src={logo} alt="logo" className='imge' />
          </div>
     
          <h4 className='login-as'>Login As Student</h4>
          <label htmlFor="subj" id='Subject1'>Username</label>
          <input id='subj' type="text" 
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          /> <br />
          <label htmlFor="roll" id='rollno1'>Password</label>
          <input id='roll' type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          /> 
          <p className='signup'>Don't have an account? <Link to="/signup" className='atag'>Signup</Link></p>
          <button id='butn'>Login</button>
    
        </div>
      </div> 
      </form>
    </div>
  )
}

export default LoginSignup














//******************************** STARTER CODE ************************************** */
// import React from 'react'
// import './LoginSignup.css'
// import logo from '../Images/logo.jpg'
// import { Link } from 'react-router-dom'

// const LoginSignup = () => {
//   return (
//     <div className='back'>
//       <div className='card'>
//         <div className='inner-most'>
//           <div>
//       <img src={logo} alt="logo" className='imge' />
//           </div>
//           <h4 className='login-as'>Login As Teacher</h4>
//           <label htmlFor="subj" id='Subject'>Username</label>
//           <input id='subj' type="text" /> <br />
//           <label htmlFor="roll" id='rollno'>Password</label>
//           <input id='roll' type="password" /> <br />
//           <button id='butn'>Login</button>
//         </div>
//       </div>
//       <div className='card'>
//         <div className='inner-most-student'>
//         <div>
//       <img src={logo} alt="logo" className='imge' />
//           </div>
//           <h4 className='login-as'>Login As Student</h4>
//           <label htmlFor="subj" id='Subject1'>Subject</label>
//           <input id='subj' type="text" /> <br />
//           <label htmlFor="roll" id='rollno1'>RollNumber</label>
//           <input id='roll' type="text" /> 
//           <p className='signup'>Don't have an account? <Link to="/signup" className='atag'>Signup</Link></p>
//           <button id='butn'>Login</button>
//         </div>
//       </div> 
//     </div>
//   )
// }

// export default LoginSignup
