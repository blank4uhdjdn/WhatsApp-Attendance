import React from 'react'
import './Login.css'
import logo from '../Images/logo.jpg'
const login = () => {
    return (
        <>
                    <div className="back">
                        <div id='login-card'>
                            <div id='inner-most'>
                                <div>
                                    <img src={logo} alt="logo" className='imge' />
                                </div> 
                                <label htmlFor="roll" id='rollno1'>Username</label>
                                <input id='roll' type="text" /> <br />
                                <label htmlFor="roll" id='pswd'>Password</label>
                                <input id='pass' type="password" /> <br />
                                <p className='signup'>Don't have an account? <a href="" className='atag'>Signup</a></p>
                                <button id='butn'>Login</button>
                            </div>
                        </div>
                    </div>
                </>
    )
}

export default login
